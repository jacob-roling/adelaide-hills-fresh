import { Controller } from "@hotwired/stimulus";
import { ref, effect } from "@vue/reactivity";

export default class Checkbox extends Controller {
  static values = {
    mixed: { type: Boolean, default: false },
  };

  connect() {
    this.abortController = new AbortController();

    this.element.addEventListener("click", this.toggle.bind(this), {
      signal: this.abortController.signal,
    });

    this.element.addEventListener("keydown", this.keydown.bind(this), {
      signal: this.abortController.signal,
    });

    this.element.setAttribute("role", "checkbox");
    this.element.setAttribute("tabindex", "0");

    this.ariaChecked = ref(
      this.element.getAttribute("aria-checked") ?? "false"
    );

    effect(() => {
      this.element.setAttribute("aria-checked", this.ariaChecked.value);
    });
  }

  toggle() {
    switch (this.ariaChecked.value) {
      case "true":
        this.ariaChecked.value = "false";
        break;
      case "false":
        if (this.mixedValue) {
          this.ariaChecked.value = "mixed";
        } else {
          this.ariaChecked.value = "true";
        }
        break;
      case "mixed":
        this.ariaChecked.value = "true";
        break;
    }
  }

  keydown(event) {
    switch (event.code) {
      case "Space":
        event.preventDefault();
        this.toggle();
        break;
      case "Enter":
        event.preventDefault();
        this.toggle();
        break;
    }
  }

  disconnect() {
    this.abortController.abort();
  }
}
