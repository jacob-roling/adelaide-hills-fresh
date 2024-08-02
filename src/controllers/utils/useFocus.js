// This code is a minimal adaptation of @alpinejs/focus for use with @hotwired/stimulus
// See https://github.com/alpinejs/alpine/blob/main/packages/focus/src/index.js for the original code
// Copyright © 2019-2021 Caleb Porzio and contributors
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

import { focusable, isFocusable } from "tabbable";

let lastFocused = null;
let currentFocused = null;

window.addEventListener(
  "focusin",
  () => {
    lastFocused = currentFocused;
    currentFocused = document.activeElement;
  },
  {
    once: true,
  }
);

export class FocusController {
  constructor(el) {
    this.__within = el;
    this.__noscroll = false;
    this.__wrapAround = false;
  }

  within(el) {
    this.__within = el;
    return this;
  }

  withoutScrolling() {
    this.__noscroll = true;
    return this;
  }

  noscroll() {
    this.__noscroll = true;
    return this;
  }

  withWrapAround() {
    this.__wrapAround = true;
    return this;
  }

  wrap() {
    return this.withWrapAround();
  }

  focusable(el) {
    return isFocusable(el);
  }

  previouslyFocused() {
    return lastFocused;
  }

  lastFocused() {
    return lastFocused;
  }

  focused() {
    return currentFocused;
  }

  focusables() {
    if (Array.isArray(this.__within)) return this.__within;

    return focusable(this.__within, { displayCheck: "none" });
  }

  all() {
    return this.focusables();
  }

  isFirst(el) {
    let els = this.all();

    return els[0] && els[0].isSameNode(el);
  }

  isLast(el) {
    let els = this.all();

    return els.length && els.slice(-1)[0].isSameNode(el);
  }

  getFirst() {
    return this.all()[0];
  }

  getLast() {
    return this.all().slice(-1)[0];
  }

  getNext() {
    let list = this.all();
    let current = document.activeElement;

    // Can't find currently focusable HTMLElement in list.
    if (list.indexOf(current) === -1) return;

    // This is the last HTMLElement in the list and we want to wrap around.
    if (this.__wrapAround && list.indexOf(current) === list.length - 1) {
      return list[0];
    }

    return list[list.indexOf(current) + 1];
  }

  getPrevious() {
    let list = this.all();
    let current = document.activeElement;

    // Can't find currently focusable HTMLElement in list.
    if (list.indexOf(current) === -1) return;

    // This is the first HTMLElement in the list and we want to wrap around.
    if (this.__wrapAround && list.indexOf(current) === 0) {
      return list.slice(-1)[0];
    }

    return list[list.indexOf(current) - 1];
  }

  first() {
    this.focus(this.getFirst());
  }

  last() {
    this.focus(this.getLast());
  }

  next() {
    this.focus(this.getNext());
  }

  previous() {
    this.focus(this.getPrevious());
  }

  prev() {
    return this.previous();
  }

  focus(el) {
    if (!el) return;

    setTimeout(() => {
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "0");

      el.focus({ preventScroll: this.__noscroll });
    });
  }
}

export function useFocus(element) {
  return new FocusController(element);
}

function setInert(el) {
  let undos = [];

  crawlSiblingsUp(el, (sibling) => {
    let cache = sibling.hasAttribute("aria-hidden");

    sibling.setAttribute("aria-hidden", "true");

    undos.push(() => cache || sibling.removeAttribute("aria-hidden"));
  });

  return () => {
    while (undos.length) undos.pop()();
  };
}

function crawlSiblingsUp(el, callback) {
  if (el.isSameNode(document.body) || !el.parentNode) return;

  Array.from(el.parentNode.children).forEach((sibling) => {
    if (sibling.isSameNode(el)) {
      crawlSiblingsUp(el.parentNode, callback);
    } else {
      callback(sibling);
    }
  });
}

function disableScrolling() {
  let overflow = document.documentElement.style.overflow;
  let paddingRight = document.documentElement.style.paddingRight;

  let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  document.documentElement.style.overflow = "hidden";
  document.documentElement.style.paddingRight = `${scrollbarWidth}px`;

  return () => {
    document.documentElement.style.overflow = overflow;
    document.documentElement.style.paddingRight = paddingRight;
  };
}
