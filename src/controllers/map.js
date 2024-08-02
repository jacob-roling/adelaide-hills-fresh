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
    this.first = true;
  }

  connect() {
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  /**
   * @param {HTMLElement} element
   */
  markerTargetConnected(markerTemplate) {
    const markerContainer = document.createElement("div");
    markerContainer.appendChild(markerTemplate.content.cloneNode(true));
    const marker = L.marker(
      [markerTemplate.dataset.latitude, markerTemplate.dataset.longitude],
      {
        title: "Test",
        icon: L.divIcon({
          html: markerContainer,
        }),
      },
    ).addTo(this.map);
    const markerElement = marker.getElement();
    if (this.first) {
      markerElement.setAttribute("aria-selected", "true");
      this.first = false;
    }
    markerElement.classList.add("group");
    markerElement.setAttribute("data-tabs-target", "tab");
    marker.on("click", () => {
      this.map.panTo([
        markerTemplate.dataset.latitude,
        markerTemplate.dataset.longitude,
      ]);
    });
  }
}
