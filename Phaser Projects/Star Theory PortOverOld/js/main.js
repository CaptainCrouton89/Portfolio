"use strict";

// Set first menu as the startMenu scene
let startMenu = new StartMenu("startMenu");

// Automatic, permanent game configuration settings 
var gameConfig = {
    type: Phaser.AUTO,
    zoom: 1.39,
    width: 1280,
    height: 720,
    pixelArt: true,
    scene: [new StartMenu("startMenu"), new CockpitMenu("cockpitMenu")]
}

// Move this to a json eventually
var settingsConfig = {
    galaxy: {
        totalStarSystems: {min: 1, current: 100, max: 200},
        averageNumPlanets: {min: 0, current: 3, max: 9},
        averageNumMoons: {min: 0, current: .3, max: 1},
    },
    player: {

    },
    story: {

    },
    general: {
        factionExpansionRate: {min: 0, current: .5, max: 1}
    }
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