import { Controller } from "@hotwired/stimulus";
import YTPlayer from "yt-player";

export default class extends Controller {
  static targets = ["video"];

  static values = {
    id: String,
    volume: {
      type: Number,
      default: 50,
    },
    opts: Object,
  };

  initialize() {
    this.loaded = false;
    this.player = new YTPlayer(this.videoTarget, this.optsValue);
  }

  connect() {}

  play() {
    if (!this.loaded) {
      this.player.load(this.idValue);
      this.loaded = true;
    }
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  stop() {
    this.player.stop();
  }

  volumeValueChanged() {
    this.player.setVolume(this.volumeValue);
  }

  disconnect() {
    this.player.destroy();
  }
}
