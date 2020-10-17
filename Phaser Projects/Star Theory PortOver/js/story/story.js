"use strict"

class Story {
    constructor(config=null, settings=null) {
        this.settings = settings;

        // Load saved story if possible, otherwise create a new one
        if (config) {
            this.load(config);
        } else {
            this.newStory ();
        }
    }

    newStory () {
        console.log("Creating story...");
    }
    
    load (config) {
        console.log("Loading story...");
    }
}