import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["entry"];

  static values = {
    viewport: { type: Boolean, default: true },
  };

  initialize() {
    this.observer = new IntersectionObserver(this.observe.bind(this), {
      root: this.viewportValue ? null : this.element,
    });
  }

  observe(entries) {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        this.dispatch("visible", { detail: target });
      }
    });
  }

  entryTargetConnected(entry) {
    this.observer.observe(entry);
  }

  entryTargetDisonnected(entry) {
    this.observer.unobserve(entry);
  }

  disconnect() {
    this.observer.disconnect();
  }
}
