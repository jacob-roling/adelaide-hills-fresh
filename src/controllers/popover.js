import { Controller } from "@hotwired/stimulus";
import {
  autoUpdate,
  computePosition,
  flip,
  shift,
  offset,
  autoPlacement,
} from "@floating-ui/dom";

export default class extends Controller {
  static targets = ["anchor", "popover"];

  static values = {
    placement: String,
  };

  connect() {
    const popoverStyle = getComputedStyle(this.popoverTarget);

    const offsetValue = parseInt(
      popoverStyle.getPropertyValue("--popover-offset")
    );

    const paddingValue = parseInt(
      popoverStyle.getPropertyValue("--popover-padding")
    );

    this.cleanup = autoUpdate(this.anchorTarget, this.popoverTarget, () => {
      const middleware = [
        offset(offsetValue),
        flip({ padding: paddingValue }),
        shift({ padding: paddingValue }),
      ];
      const placement = this.placementValue;
      if (!this.hasPlacementValue) {
        middleware.push(autoPlacement());
      }
      computePosition(this.anchorTarget, this.popoverTarget, {
        placement,
        middleware,
      }).then(({ x, y }) => {
        Object.assign(this.popoverTarget.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    });
  }

  disconnect() {
    if (this.cleanup) {
      this.cleanup();
    }
  }
}
