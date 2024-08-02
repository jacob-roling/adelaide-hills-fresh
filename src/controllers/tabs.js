import { Controller } from "@hotwired/stimulus";
import { ref, effect } from "@vue/reactivity";
import { useFocus, useID } from "./utils";

export default class extends Controller {
  static targets = ["list", "tab", "panel"];

  static values = {
    manual: Boolean,
  };

  initialize() {
    this.abortController = new AbortController();
    this.id = useID();
    this.selected = ref(null);
    this.tabsConnected = 0;
    this.panelsConnected = 0;
    this.animationTimer;

    this.dispose = effect(() => {
      if (this.selected.value) {
        this.tabTargets.forEach((tab) => {
          if (tab.getAttribute("aria-controls") === this.selected.value) {
            tab.setAttribute("aria-selected", "true");
            tab.removeAttribute("tabindex");
            // this.moveIndicator(tab);
          } else {
            tab.setAttribute("aria-selected", "false");
            tab.setAttribute("tabindex", "-1");
          }
        });

        this.panelTargets.forEach((panel) => {
          if (panel.id === this.selected.value) {
            panel.setAttribute("data-tabs-selected", "true");
          } else {
            panel.removeAttribute("data-tabs-selected");
          }
        });
      }
    });
  }

  select(target) {
    this.selected.value = target.getAttribute("aria-controls");
  }

  keydown(event) {
    event.preventDefault();

    let next = null;

    switch (event.code) {
      case "ArrowLeft":
        next = this.listFocus.wrap().getPrevious();
        if (next) {
          if (!this.manualValue) {
            this.select(next);
          }
          this.listFocus.focus(next);
        }
        break;
      case "ArrowRight":
        next = this.listFocus.wrap().getNext();
        if (next) {
          if (!this.manualValue) {
            this.select(next);
          }
          this.listFocus.focus(next);
        }
        break;
      case "Home":
        next = this.listFocus.getFirst();
        if (next) {
          if (!this.manualValue) {
            this.select(next);
          }
          this.listFocus.focus(next);
        }
        break;
      case "End":
        next = this.listFocus.getLast();
        if (next) {
          if (!this.manualValue) {
            this.select(next);
          }
          this.listFocus.focus(next);
        }
        break;
    }
  }

  listTargetConnected(list) {
    list.setAttribute("role", "tablist");
    list.addEventListener("keydown", this.keydown.bind(this), {
      signal: this.abortController.signal,
    });
    this.listFocus = useFocus(list);
  }

  listTargetDisconnected(list) {
    list.removeEventListener("keydown", this.keydown.bind(this));
  }

  tabTargetConnected(tab) {
    tab.setAttribute("id", this.id(`tab-${this.tabsConnected}`));
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", this.id(`panel-${this.tabsConnected}`));
    tab.addEventListener("click", this.select.bind(this, tab), {
      signal: this.abortController.signal,
    });
    this.tabsConnected++;
  }

  tabTargetDisconnected(tab) {
    tab.removeEventListener("click", this.select.bind(this, tab));
  }

  panelTargetConnected(panel) {
    panel.setAttribute("id", this.id(`panel-${this.panelsConnected}`));
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("tabindex", "0");
    panel.setAttribute(
      "aria-labelledby",
      this.id(`tab-${this.panelsConnected}`)
    );
    if (
      panel.hasAttribute("data-tabs-selected") &&
      panel.getAttribute("data-tabs-selected") !== "false"
    ) {
      this.selected.value = panel.id;
    }
    this.panelsConnected++;
  }

  disconnect() {
    this.abortController.abort();
    this.dispose();
  }

  // moveIndicator(newTab) {
  //   const scaleX = newTab.offsetWidth / this.listTarget.offsetWidth;
  //   this.listTarget.style.setProperty(
  //     "--_tab-indicator-left",
  //     CSS.px(newTab.offsetLeft)
  //   );

  //   this.listTarget.style.setProperty(
  //     "--_tab-indicator-scale-x",
  //     CSS.number(scaleX)
  //   );
  // }
}

// const right = oldTab.offsetLeft < newTab.offsetLeft;

// let transitionWidth = null;

// if (right) {
//   transitionWidth =
//     newTab.offsetLeft + newTab.offsetWidth - oldTab.offsetLeft;
// } else {
//   transitionWidth =
//     oldTab.offsetLeft + oldTab.offsetWidth - newTab.offsetLeft;
//   this.listTarget.style.setProperty("--_left", newTab.offsetLeft + "px");
// }

// this.listTarget.style.setProperty(
//   "--_width",
//   transitionWidth / this.listTarget.offsetWidth
// );

// clearTimeout(this.animationTimer);
// this.animationTimer = setTimeout(() => {
// }, 120);
