import { Controller } from "@hotwired/stimulus";

export default class DateTime extends Controller {
  connect() {
    const date = new Date(this.element.getAttribute("datetime"));
    
    const dateTimeFormatter = new Intl.DateTimeFormat(undefined, {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    this.element.textContent = dateTimeFormatter.format(date);
  }
}
