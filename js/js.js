"use strict";

twttr.widgets.createTimeline(
  {
    sourceType: "profile",
    screenName: "fabric"
  },
  document.getElementById("#twitter")
);