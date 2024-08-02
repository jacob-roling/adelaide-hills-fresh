import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    prefix: String,
  };

  connect() {
    this.elements = [];
    // const randomData = crypto.getRandomValues(new Uint16Array());
    // this.id = String.fromCodePoint(...randomData);
  }

  add(event) {
    event.target.setAttribute(
      "id",
      `${this.prefixValue}-${this.elements.length}`
    );
    this.element.push(event.target);
  }
}
