import { Controller } from "@hotwired/stimulus";
import Glide, {
  Controls,
  Breakpoints,
  Swipe,
  Autoplay,
} from "@glidejs/glide/dist/glide.modular.esm";

export default class Carousel extends Controller {
  static targets = ["slide"];
  static values = {
    type: { type: String, default: "carousel" },
  };

  initialize() {
    this.glide = new Glide(this.element, {
      type: this.typeValue,
      gap: 0,
      perView: 1,
      focusAt: "center",
      autoplay: 3000,
    });
  }

  connect() {
    this.glide.mount({ Controls, Breakpoints, Swipe, Autoplay });
  }

  /**
   * @param {HTMLElement} element
   */
  slideTargetConnected(slide) {}

  disconnect() {
    this.glide.destroy();
  }
}
