"use strict";
    document.body.addEventListener('mdl-componentupgraded', (event) => {

        if (event.target.className.split(' ').indexOf('mdl-js-layout') < 0) {
            return
        }

        // code that loads https://platform.twitter.com/widgets.js goes here
        twttr.widgets.createTimeline(
        {
            sourceType: "profile",
            screenName: "nycgo"
        },
         document.getElementById("#twitter")
);
    });
