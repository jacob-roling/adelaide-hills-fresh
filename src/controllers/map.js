import { Controller } from "@hotwired/stimulus";
import L from "leaflet";

export default class Map extends Controller {
  static targets = ["marker"];
  static values = {
    latitude: { type: Number },
    longitude: { type: Number },
    zoom: { type: Number, default: 10 },
  };

  initialize() {
    this.map = L.map(this.element, {
      center: [this.latitudeValue, this.longitudeValue],
      zoom: this.zoomValue,
    });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    this.dispatch("loaded", {
      detail: this.map,
    });
  }

  /**
   *
   * @param {HTMLElement} element
   */
  markerTargetConnected(element) {
    let marker = L.marker([element.dataset.lat, element.dataset.lon]).addTo(
      this.map,
    );
  }
}
