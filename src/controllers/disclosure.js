import { Controller } from "@hotwired/stimulus";

export default class Disclosure extends Controller {
  static targets = ["summary", "details"];

  static values = {
    requireFocus: { type: Boolean, default: true },
  };

  static outlets = ["focus-group"];

  initialize() {
    this.abortController = new AbortController();
  }

  connect() {
    this.abortController = new AbortController();

    if (this.detailsTarget.hasAttribute("id")) {
      this.summaryTarget.setAttribute("aria-controls", this.detailsTarget.id);
    }

    this.detailsTarget.addEventListener(
      "focusout",
      this.handleFocusout.bind(this),
      {
        signal: this.abortController.signal,
      },
    );

    this.element.addEventListener(
      "keydown",
      this.navigateAndCloseWithKeyboard.bind(this),
      {
        signal: this.abortController.signal,
      },
    );
  }

  /**
   * @param {KeyboardEvent} event
   */
  navigateAndCloseWithKeyboard(event) {
    switch (event.code) {
      case "Escape":
        event.preventDefault();
        this.close();
        this.summaryTarget.focus();
        event.stopPropagation();
        break;
      case "ArrowDown":
        event.preventDefault();
        if (this.summaryTarget.ariaExpanded == "true") {
          this.focusGroupOutlet.next().focus();
        } else {
          this.open();
          this.focusGroupOutlet.first().focus();
        }
        event.stopPropagation();
        break;
      case "ArrowUp":
        event.preventDefault();
        if (this.summaryTarget.ariaExpanded == "true") {
          this.focusGroupOutlet.previous().focus();
        } else {
          this.open();
          this.focusGroupOutlet.last().focus();
        }
        event.stopPropagation();
        break;
      case "Home":
      case "PageUp":
        event.preventDefault();
        if (this.summaryTarget.ariaExpanded == "true") {
          this.focusGroupOutlet.first().focus();
        }
        event.stopPropagation();
        break;
      case "End":
      case "PageDown":
        event.preventDefault();
        if (this.summaryTarget.ariaExpanded == "true") {
          this.focusGroupOutlet.last().focus();
        }
        event.stopPropagation();
        break;
    }
  }

  /**
   * @param {KeyboardEvent} event
   */
  toggleAndFocusWithKeyboard(event) {
    switch (event.code) {
      case "Space":
        event.preventDefault();
        this.toggle();
        if (this.summaryTarget.ariaExpanded == "true") {
          this.focusGroupOutlet.first().focus();
        }
        break;
      case "Enter":
        event.preventDefault();
        this.toggle();
        if (this.summaryTarget.ariaExpanded == "true") {
          this.focusGroupOutlet.first().focus();
        }
        break;
    }
  }

  /**
   * @param {FocusEvent} event
   */
  handleFocusout(event) {
    if (
      event.relatedTarget != null &&
      !this.detailsTarget.contains(event.relatedTarget)
    ) {
      this.close();
    }
  }

  toggle() {
    if (
      this.summaryTarget.hasAttribute("aria-expanded") &&
      this.summaryTarget.ariaExpanded !== "false"
    ) {
      return this.close();
    }
    this.open();
  }

  open() {
    this.summaryTarget.ariaExpanded = "true";
    this.summaryTarget.setAttribute("tabindex", "-1");
    this.detailsTarget.setAttribute("data-expanded", "true");
    this.dispatch("open");
  }
  
  close() {
    this.summaryTarget.ariaExpanded = "false";
    this.summaryTarget.removeAttribute("tabindex");
    this.detailsTarget.removeAttribute("data-expanded");
    this.dispatch("close");
  }

  summaryTargetConnected(summary) {
    summary.addEventListener("click", this.toggle.bind(this), {
      signal: this.abortController.signal,
    });

    summary.addEventListener(
      "keydown",
      this.toggleAndFocusWithKeyboard.bind(this),
      {
        signal: this.abortController.signal,
      },
    );
  }

  disconnect() {
    this.abortController.abort();
  }
}
