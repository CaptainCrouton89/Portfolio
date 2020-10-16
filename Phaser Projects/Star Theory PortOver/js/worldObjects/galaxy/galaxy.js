"use strict"

class Galaxy {
    constructor(config=null, settings=null) {
        this.settings = settings;

        this.starSystemManager = new StarSystemManager(this);

        // Load saved galaxy if possible, otherwise create a new one
        if (config) {
            this.load(config);
        } else {
            this.newGalaxy()
        }
    }

    newGalaxy () {
        console.log("Creating galaxy...");

        // Create starSystem and populate it
        this.starSystemManager.genStarsAndPlanets();


        // this.factionManager = new FactionManager();
    }

    load (config) {
        console.log("Loading galaxy...");

        for (starSystemConfig in config["starSystems"]) {
            starSystem = new StarSystem(starSystemConfig);
            this.starSystemManager.add(starSystem);
        }
    }
}