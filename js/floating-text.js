"use strict";

var app = {
  chars: [
    "Happy",
    "Vietnam",
    "Women's",
    "Day",
    "Wishing you joy and love!",
    "Stay strong and keep shining!",
    "You inspire us every day!",
    "May your dreams come true!",
    "Sending you all my best!",
    "You deserve the best today!",
    "Shine bright like you always do!",
    "You are amazing, stay strong!",
    "Happy 20/10, keep being awesome!",
  ],

  init: function () {
    app.container = document.createElement("div");
    app.container.className = "animation-container";
    document.body.appendChild(app.container);
    window.setInterval(app.add, 1000);
  },

  add: function () {
    var element = document.createElement("span");
    app.container.appendChild(element);
    app.animate(element);
  },

  animate: function (element) {
    var character = app.chars[Math.floor(Math.random() * app.chars.length)];
    var duration = Math.floor(Math.random() * 15) + 1;
    var offset = Math.floor(Math.random() * (50 - duration * 2)) + 3;
    var size = 10 + (15 - duration);
    element.style.cssText = "right:" + offset + "vw; font-size:" + size + "px;animation-duration:" + duration + "s";
    element.innerHTML = character;
    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element);
  },
};

document.addEventListener("DOMContentLoaded", app.init);
