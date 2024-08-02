import { Controller } from "@hotwired/stimulus";
import { useID } from "./utils";

export class Toggle extends Controller {
  static values = {
    attribute: String,
  };

  initialize() {
    this.abortController = new AbortController();
    this.id = useID();

    this.element.addEventListener("click", this.toggle.bind(this), {
      signal: this.abortController.signal,
    });
    this.element.addEventListener("keydown", this.keydown.bind(this), {
      signal: this.abortController.signal,
    });
  }

  toggle() {
    const toggled =
      this.element.hasAttribute(this.attributeValue) &&
      this.element.getAttribute(this.attributeValue) !== "false";

    if (toggled) {
      this.element.setAttribute(this.attributeValue, "false");
    } else {
      this.element.setAttribute(this.attributeValue, "true");
    }
  }

  keydown(event) {
    switch (event.code) {
      case "Enter":
        event.preventDefault();
        this.toggle();
        break;
      case "Space":
        event.preventDefault();
        this.toggle();
        break;
    }
  }

  disconnect() {
    this.abortController.abort();
  }
}
