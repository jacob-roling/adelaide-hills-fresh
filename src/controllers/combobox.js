import { Controller } from "@hotwired/stimulus";
import { useFocus, useID } from "./utils";

export default class Combobox extends Controller {
  static targets = ["combobox", "listbox", "value"];

  initialize() {
    this.abortController = new AbortController();
    this.id = useID();
  }

  /**
   * @param {HTMLElement} element
   */
  select(element) {
    if (this.selected !== undefined) {
      this.selected.setAttribute("aria-selected", "false");
    }
    this.selected = element;
    element.setAttribute("aria-selected", "true");
    if (this.hasValueTarget) {
      this.valueTarget.textContent = element.textContent;
    } else {
      this.comboboxTarget.textContent = element.textContent;
    }
    this.comboboxTarget.removeAttribute("aria-activedescendant");
    this.dispatch("change", {
      detail: element,
    });
  }

  /**
   * @param {HTMLElement} element
   */
  setActiveDescendant(element) {
    if (this.activeDescendant !== undefined) {
      this.activeDescendant.classList.remove("activedescendant");
    }
    this.activeDescendant = element;
    this.activeDescendant.classList.add("activedescendant");
    this.comboboxTarget.setAttribute("aria-activedescendant", element.id);
  }

  /**
   * @param {KeyboardEvent} event
   */
  keydown(event) {
    if (this.activeDescendant) {
      switch (event.code) {
        case "ArrowUp":
          event.preventDefault();
          if (this.activeDescendant.previousElementSibling) {
            this.setActiveDescendant(
              this.activeDescendant.previousElementSibling
            );
          } else {
            this.setActiveDescendant(
              this.listboxTarget.children[
                this.listboxTarget.children.length - 1
              ]
            );
          }

          break;
        case "ArrowDown":
          event.preventDefault();
          if (this.activeDescendant.nextElementSibling) {
            this.setActiveDescendant(this.activeDescendant.nextElementSibling);
          } else {
            this.setActiveDescendant(this.listboxTarget.children[0]);
          }
          break;
      }
    }
  }

  /**
   * @param {Event} event
   */
  open(event) {
    if (event.detail) {
      if (this.selected !== undefined) {
        this.setActiveDescendant(this.selected);
      } else {
        this.setActiveDescendant(this.listboxTarget.children[0]);
      }
    }
  }

  /**
   * @param {HTMLElement} combobox
   */
  comboboxTargetConnected(combobox) {
    combobox.setAttribute("id", this.id("combobox"));
    combobox.setAttribute("role", "combobox");
    combobox.setAttribute("tabindex", "0");
    combobox.setAttribute("aria-haspopup", "listbox");
    combobox.setAttribute("aria-controls", this.id("listbox"));
    combobox.setAttribute("aria-expanded", "false");
    combobox.addEventListener("keydown", this.keydown.bind(this), {
      signal: this.abortController.signal,
    });
  }

  /**
   * @param {HTMLElement} listbox
   */
  listboxTargetConnected(listbox) {
    listbox.setAttribute("id", this.id("listbox"));
    listbox.setAttribute("role", "listbox");
    listbox.setAttribute("tabindex", "-1");
    this.listFocus = useFocus(listbox);

    Array.from(listbox.children).forEach((option, index) => {
      option.setAttribute("id", this.id(`option-${index}`));
      option.setAttribute("role", "option");
      if (
        option.hasAttribute("aria-selected") &&
        option.getAttribute("aria-selected") === "true"
      ) {
        this.selected = option;
      } else {
        option.setAttribute("aria-selected", "false");
      }
      option.addEventListener("click", this.select.bind(this, option), {
        capture: true,
        signal: this.abortController.signal,
      });
    });
  }

  disconnect() {
    this.abortController.abort();
  }
}
