import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["element"];

  connect() {
    this.element.addEventListener("focusin", this.focusChanged.bind(this));
    this.element.addEventListener("focusout", this.focusChanged.bind(this));
  }

  focusChanged() {
    const index = this.elementTargets.indexOf(document.activeElement);
    
    this.elementTargets.forEach(element => {
      element.setAttribute("tabindex", "-1");
    });

    if (index == -1) {
      return this.element.removeAttribute("aria-activedescendant");
    }
    
    this.elementTargets[index].removeAttribute("tabindex");
    
    if (this.elementTargets[index].hasAttribute("id")) {
      this.element.setAttribute("aria-activedescendant", this.elementTargets[index].id);
    }
  }
  
  next() {
    if (document.activeElement == null) {
      return;
    }

    const index = this.elementTargets.indexOf(document.activeElement);
    
    if (index == -1) {
      return;
    }

    if (index + 1 < this.elementTargets.length) {
      return this.elementTargets[index + 1];
    }

    return this.first();
  }

  previous() {
    if (document.activeElement == null) {
      return;
    }

    const index = this.elementTargets.indexOf(document.activeElement);
    
    if (index == -1) {
      return;
    }
    
    if (index - 1 < 0) {
      return this.elementTargets[this.elementTargets.length - 1];
    }
    
    return this.elementTargets[index - 1];
  }

  first() {
    return this.elementTargets[0];
  }

  last() {
    return this.elementTargets[this.elementTargets.length - 1];
  }
}
