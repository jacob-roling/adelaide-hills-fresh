import { Controller } from "@hotwired/stimulus";
import { focusable, isFocusable } from "tabbable";

export default class extends Controller {
  connect() {
    this.children = focusable(this.element);
    // this.within = el;
    // this.noscroll = false;
    // this.wrapAround = false;
  }

  /**
   *
   * @param {Event} event
   */
  focus(event) {
    console.log(event);
    // event.target.focus();
  }

  /**
   *
   * @param {Event} event
   */
  next(event) {
    console.log(event);
  }
}
