import { Controller } from "@hotwired/stimulus";

/**
 * Lazy-loading controller.
 * @class
 */
export default class extends Controller {
  static values = {
    loaded: String,
    importMapId: String,
  };

  connect() {
    this.updateImportMap();
  }

  importMapIdValueChanged() {
    this.updateImportMap();
  }

  updateImportMap() {
    if (!this.hasImportMapIdValue) {
      return console.error(`Missing "importMapId" value on lazy controller`);
    }

    const importMapElement = document.getElementById(this.importMapIdValue);

    if (!importMapElement) {
      return console.error(
        `Failed to get import map by id "${this.importMapIdValue}"`
      );
    }

    try {
      this.importMap = JSON.parse(
        document.getElementById(this.importMapIdValue).innerHTML
      );
    } catch {
      return console.error(`Invalid JSON in import map`);
    }
  }

  /**
   * Loads all controllers on target element that are included in the import map.
   * @param {Event} param0
   */
  load({ target }) {
    Object.entries(this.importMap.imports)
      .filter(
        ([identifier]) =>
          !this.loadedValue.includes(identifier) &&
          target.dataset.controller.includes(identifier) &&
          identifier !== "lazy"
      )
      .forEach(this.#load.bind(this));
  }

  #load([identifier, moduleName]) {
    import(moduleName).then(({ default: Controller }) => {
      Stimulus.register(identifier, Controller);
      if (this.loadedValue.length > 0) {
        this.loadedValue += " " + identifier;
      } else {
        this.loadedValue = identifier;
      }
    });
  }
}
