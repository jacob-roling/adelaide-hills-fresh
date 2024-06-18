/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

interface Window {
  Stimulus: import("@hotwired/stimulus").Application;
  up: import("unpoly");
}
