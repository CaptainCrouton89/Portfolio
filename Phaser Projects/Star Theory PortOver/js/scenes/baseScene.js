"use strict"

class BaseScene extends Phaser.Scene {
    constructor(config) {
        super(config);
    }

    init () {
        console.log("Loading " + this.name + "...");
    }
    
    preload () {

    }
    
    create () {
        
    }
}