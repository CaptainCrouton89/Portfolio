"use strict";

// Set first menu as the startMenu scene

// Automatic, permanent game configuration settings 
var gameConfig = {
    type: Phaser.AUTO,
    zoom: 1.39,
    width: 1280,
    height: 720,
    pixelArt: true,
    scene: [new BootScene("bootScene"), new LoadScene("loadScene"), new StartMenu("startMenu"), new CockpitMenu("cockpitMenu"), new LocalMapMenu("localMapMenu"), new SelectedEntityMenu("selectedEntityMenu"), new CurrentEntityMenu("currentEntityMenu")]
}

// Move this to a json eventually
var settingsConfig = {
    galaxy: {
        starLayers: {label: "Layers of stars", range: {min: 1, current: 5, max: 8}},
        averageNumPlanets: {label: "Average number of planets per star", range: {min: 0, current: 4, max: 9}},
        averageNumMoons: {label: "Average number of moons per planet", range: {min: 0, current: .3, max: 1}},
    },
    player: {
        startingCash: {label: "Starting cash", range: {min: 0, current: 1000, max: 100000}},
        startingModules: {label: "Starting modules", list: []},
        startingReputation: {label: "Starting reputation", range: {min: 0, current: 0, max: 1000}},
        startingHonor: {label: "Starting honor", range: {min: 0, current: .5, max: 1}},
    },
    story: {
        skipStory: {label: "Skip story", checkbox: false}
    },
    general: {
        // factionExpansionRate: {min: 0, current: .5, max: 1}
    },
    controls: controlsConfig
}

var controlsConfig = {
    "h": help,
    "-": zoomOut,
    "=": zoomIn
}

// Create a globally accessible phaser Game object. This will let us access the game manager, player, and galaxy
var StarTheory = new Phaser.Game(gameConfig);



function start() {
    // Try to load a save if it is present
    let saveConfig;
    try {
        saveConfig = JSON.parse('saves/save.json');
    } catch(err) {
        saveConfig = null;
    }

    StarTheory.gameManager = new GameManager(saveConfig, settingsConfig);
}

function getGameManager() {
    return StarTheory.gameManager;
}

function getGame() {
    return StarTheory;
}

start()

function help() {

}

function zoomIn () {
    var cam = StarTheory.scene.cameras.main;
    cam.pan(500, 500, 2000, 'Power2');
    cam.zoomTo(4, 3000);
}

function zoomOut () {

}