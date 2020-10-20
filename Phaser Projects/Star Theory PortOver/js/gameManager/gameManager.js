"use strict"

class GameManager {
    constructor(saveConfig, settingsConfig) {
        this.gameSettings = settingsConfig;

        this.player;
        this.galaxy;
        this.story;

        // if an existing save configuration file exists, load the game using that, otherwise run a new game.
        if (saveConfig) {
            this.load(saveConfig);
        } else {
            this.newGame()
        }
    }

    switchScenes (currentSceneString, nextSceneString) {
        // this.removeTweens(currentSceneString);
        StarTheory.scene.stop(currentSceneString);

        // want to set new scene.last scene equal to last scene
        
        StarTheory.scene.start(nextSceneString);
    }

    // startScene (scene, pauseCurrent=false, ) {
    //     StarTheory.scene.add('cockpitMenu', new CockpitMenu('cockpitMenu'));
    //     if (StarTheory.scene.getScene(scene.name))
    //     StarTheory.scene.start(nextSceneString);
    // }

    removeTweens (currentSceneString) {
        console.log(StarTheory.scene.getScene(currentSceneString));
        StarTheory.scene.getScene(currentSceneString).tweens.destroy();
    }

    getPlayer () {
        return this.player;
    }

    getGalaxy () {
        return this.galaxy;
    }

    getStory () {
        return this.story;
    }

    getScene () {
        return this.scene;
    }

    newGame () {
        // Creates a new game
        console.log("Creating new game...");
        // Getting error below. "settings is not defined" 
        this.galaxy = new Galaxy(null, this.gameSettings.galaxy);
        this.player = new Player(null, this.gameSettings.player);
        this.story = new Story(null, this.gameSettings.story);
        // this.scene = new StartMenu();

        // Delete later
        this.player.location = this.galaxy.starSystemManager.starSystems[0][0].getPlanets()[0];
        console.log("Player current location: " + this.player.location.name);
    }

    saveGame () {
        // Saves game to save.json
        console.log("Saving game...");
    }

    load(saveConfig) {
        console.log("Loading game...");
        this.galaxy = new Galaxy(saveConfig["galaxy"]);
        this.player = new Player(saveConfig["player"]);
        this.story = new Story(saveConfig["story"]);
        // this.setScene(loadConfig["scene"]);
    }
}