import { Controller } from "@hotwired/stimulus";
import { useID } from "./utils";

export default class Disclosure extends Controller {
  static targets = ["summary", "details"];

  static values = {
    requireFocus: { type: Boolean, default: true },
  };

  initialize() {
    this.abortController = new AbortController();
    this.id = useID();
  }

  connect() {
    this.abortController = new AbortController();
    this.summaryTarget.setAttribute("aria-controls", this.detailsTarget.id);

    // if (this.requireFocusValue) {
    this.element.addEventListener("focusout", this.handleFocusout.bind(this), {
      signal: this.abortController.signal,
    });
    // }
  }

  /**
   * @param {KeyboardEvent} event
   */
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

  /**
   * @param {FocusEvent} event
   */
  handleFocusout(event) {
    if (
      (event.relatedTarget && !this.element.contains(event.relatedTarget)) ||
      (event.explicitOriginalTarget &&
        !this.element.contains(event.explicitOriginalTarget))
    ) {
      this.close();
    }
  }

  toggle() {
    if (
      this.summaryTarget.hasAttribute("aria-expanded") &&
      this.summaryTarget.getAttribute("aria-expanded") !== "false"
    ) {
      return this.close();
    }
    this.open();
  }

  open() {
    this.summaryTarget.setAttribute("aria-expanded", "true");
    this.detailsTarget.setAttribute("data-expanded", "true");
    this.dispatch("open");
  }

  close() {
    this.summaryTarget.setAttribute("aria-expanded", "false");
    this.detailsTarget.removeAttribute("data-expanded");
    this.dispatch("close");
  }

  summaryTargetConnected(summary) {
    summary.addEventListener("click", this.toggle.bind(this), {
      signal: this.abortController.signal,
    });

    summary.addEventListener("keydown", this.keydown.bind(this), {
      signal: this.abortController.signal,
    });
  }

  detailsTargetConnected(details) {
    if (!details.hasAttribute("id")) {
      details.setAttribute("id", this.id("details"));
    }
  }

  disconnect() {
    this.abortController.abort();
  }
}
