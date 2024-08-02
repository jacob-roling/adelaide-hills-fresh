import { Controller } from "@hotwired/stimulus";

const VISIBLE_TOASTS_AMOUNT = 3;
const SWIPE_THRESHOLD = 20;
const VELOCITY_THRESHHOLD = 0.11;
const TOAST_LIFETIME = 4000;
const TIME_BEFORE_UNMOUNT = 200;
const COLLAPSE_DEBOUNCE_TIME = 100;
const GAP = 14;

export default class Toast extends Controller {
  static targets = ["section", "list", "item"];

  initialize() {
    this.listObserver = new MutationObserver(this.updateList.bind(this));
    this.dismissTimeouts = [];
  }

  /**
   * @param {HTMLElement} element
   */
  itemTargetConnected(element) {
    element.setAttribute("aria-live", "polite");
    element.setAttribute("aria-atomic", "true");
    element.setAttribute("role", "status");
    element.setAttribute("tabindex", "0");
    element.setAttribute("data-visible", "");
  }

  /**
   * @param {HTMLElement} element
   */
  sectionTargetConnected(element) {
    element.setAttribute("aria-label", "Notifications alt+T");
    element.setAttribute("tabindex", "-1");
  }

  /**
   * @param {HTMLElement} element
   */
  listTargetConnected(element) {
    element.setAttribute("tabindex", "-1");
    element.style.setProperty("--gap", `${GAP}px`);
    this.listObserver.observe(element, {
      childList: true,
      subtree: true,
    });
  }

  expand() {
    while (this.dismissTimeouts.length > 0) {
      clearTimeout(this.dismissTimeouts.pop());
    }
    clearTimeout(this.collapseTimeout);
    Array.from(this.listTarget.children).forEach((toast) => {
      toast.setAttribute("data-expanded", "");
    });
  }

  collapse() {
    this.collapseTimeout = setTimeout(() => {
      Array.from(this.listTarget.children).forEach((toast, index) => {
        toast.removeAttribute("data-expanded");
        this.dismissTimeouts.push(
          setTimeout(
            () => {
              this.dismiss(toast);
            },
            TOAST_LIFETIME + index * 500
          )
        );
      });
    }, COLLAPSE_DEBOUNCE_TIME);
  }

  swipeStart(toast, event) {
    toast.setAttribute("data-swiping", "");
    toast.setPointerCapture(event.pointerId);
    this.pointerStart = event;
    this.pointerStart.time = new Date().getTime();
  }

  swipeMove(toast, event) {
    if (this.pointerStart) {
      this.swipeAmount = -Math.min(this.pointerStart.y - event.y, 0);
      toast.style.setProperty("--swipe-amount", `${this.swipeAmount}px`);
    }
  }

  swipeEnd(toast, event) {
    toast.removeAttribute("data-swiping");
    toast.releasePointerCapture(event.pointerId);
    const timeTaken = new Date().getTime() - this.pointerStart.time;
    const velocity = this.swipeAmount / timeTaken;
    toast.style.setProperty("--swipe-amount", "0px");
    if (
      this.swipeAmount >= SWIPE_THRESHOLD ||
      velocity >= VELOCITY_THRESHHOLD
    ) {
      this.dismiss(toast);
    }
  }

  /**
   * @param {HTMLElement} element
   */
  dismiss(toast) {
    toast.removeEventListener("pointerdown", this.swipeStart.bind(this, toast));
    toast.removeEventListener("pointermove", this.swipeMove.bind(this, toast));
    toast.removeEventListener("pointerup", this.swipeEnd.bind(this, toast));
    toast.removeEventListener("pointerenter", this.expand.bind(this));
    toast.removeEventListener("pointerleave", this.collapse.bind(this));
    toast.removeAttribute("data-mounted");

    setTimeout(() => {
      toast.remove();
    }, TIME_BEFORE_UNMOUNT);
  }

  updateList(records) {
    for (const record of records) {
      if (record.addedNodes.length > 0) {
        // Toast added to the list
        /**
         * @type {HTMLElement}
         */
        const frontToast = Array.from(record.addedNodes).filter(
          (node) => node.nodeType === Node.ELEMENT_NODE
        )[0];

        this.dismissTimeouts.push(
          setTimeout(() => {
            this.dismiss(frontToast);
          }, TOAST_LIFETIME)
        );

        frontToast.addEventListener(
          "pointerdown",
          this.swipeStart.bind(this, frontToast)
        );
        frontToast.addEventListener(
          "pointermove",
          this.swipeMove.bind(this, frontToast)
        );
        frontToast.addEventListener(
          "pointerup",
          this.swipeEnd.bind(this, frontToast)
        );
        frontToast.addEventListener("pointerenter", this.expand.bind(this));
        frontToast.addEventListener("pointerleave", this.collapse.bind(this));

        // const dismissTimeout = setTimeout(() => {
        //   this.dismiss(frontToast);
        //   clearTimeout(dismissTimeout);
        // }, TOAST_LIFETIME);

        const frontToastRect = frontToast.getBoundingClientRect();

        let offset = 0;

        requestAnimationFrame(() => {
          setTimeout(() => {
            frontToast.setAttribute("data-mounted", "");
          });
        });

        frontToast.style.setProperty(
          "--initial-height",
          `${frontToastRect.height}px`
        );

        for (let i = this.listTarget.children.length - 1; i >= 0; i--) {
          const toast = this.listTarget.children[i];

          toast.removeAttribute("data-front");

          if (i < this.listTarget.children.length - VISIBLE_TOASTS_AMOUNT) {
            toast.removeAttribute("data-visible");
          }

          toast.style.setProperty(
            "--toasts-before",
            this.listTarget.children.length - i - 1
          );

          toast.style.setProperty(
            "--front-height",
            `${frontToastRect.height}px`
          );

          toast.style.setProperty(
            "--offset",
            `${offset + GAP * (this.listTarget.children.length - i - 1)}px`
          );

          offset += parseInt(
            getComputedStyle(toast)
              .getPropertyValue("--initial-height")
              .slice(0, -2)
          );

          toast.style.setProperty("--z-index", i);
        }

        frontToast.setAttribute("data-front", "");
      }

      if (
        record.removedNodes.length > 0 &&
        this.listTarget.children.length > 0
      ) {
        // Toast removed from the list
        /**
         * @type {HTMLElement}
         */
        const frontToast =
          this.listTarget.children[this.listTarget.children.length - 1];

        const frontToastRect = frontToast.getBoundingClientRect();

        let offset = 0;

        for (let i = this.listTarget.children.length - 1; i >= 0; i--) {
          const toast = this.listTarget.children[i];

          toast.removeAttribute("data-front");

          if (i < this.listTarget.children.length - VISIBLE_TOASTS_AMOUNT) {
            toast.removeAttribute("data-visible");
          }

          toast.style.setProperty(
            "--toasts-before",
            this.listTarget.children.length - i - 1
          );

          toast.style.setProperty(
            "--front-height",
            `${frontToastRect.height}px`
          );

          toast.style.setProperty(
            "--offset",
            `${offset + GAP * (this.listTarget.children.length - i - 1)}px`
          );

          offset += parseInt(
            getComputedStyle(toast)
              .getPropertyValue("--initial-height")
              .slice(0, -2)
          );

          toast.style.setProperty("--z-index", i);
        }

        frontToast.setAttribute("data-front", "");
      }
    }
  }

  show({ params: { id } }) {
    const template = document.getElementById(id);
    const itemFragment = template.content.cloneNode(true);
    this.listTarget.appendChild(itemFragment);
  }

  disconnect() {
    this.listObserver.disconnect();
  }
}
