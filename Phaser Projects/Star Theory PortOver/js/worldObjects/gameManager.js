"use strict"

class GameManager {
    constructor(saveConfig=null, settingsConfig) {
        this.gameSettings = settingsConfig;

        this.player;
        this.galaxy;
        this.story;
        this.scene;

        // if an existing save configuration file exists, load the game using that, otherwise run a new game.
        if (saveConfig) {
            this.load(saveConfig);
        } else {
            this.newGame()
        }
    }

    getPlayer () {
        return this.player;
    }

    getGalaxy () {
        return this.galaxy;
    }

    getStory () {
        return this.galaxy;
    }

    getScene () {
        return this.scene;
    }

    newGame () {
        // Creates a new game
        console.log("Creating new game...");
        // Getting error below. "settings is not defined" 
        this.galaxy = new Galaxy(settings = this.gameSettings.galaxy);
        this.player = new Player(settings = this.gameSettings.player);
        this.story = new Story(settings = this.gameSettings.story);
        this.scene = new StartMenu();
    }

    saveGame () {
        // Saves game to save.json
        console.log("Saving game...");
    }

    load(loadConfig) {
        console.log("Loading game...");
        this.galaxy = new Galaxy(config=loadConfig["galaxy"]);
        this.player = new Player(config=loadConfig["player"]);
        this.story = new Story(config=loadConfig["story"]);
        // this.setScene(loadConfig["scene"]);
    }
}