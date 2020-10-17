"use strict"

class Ship {

    constructor(captain) {
        this.captain = captain;       
        this.currentStats;  
    }

    initStats () {
        this.stats = {
            space: this.baseStats.space,
            speed: this.baseStats.speed
        }
    }
}

// Example
var shipGeneratorConfig = {
    reputation: Math.random() * 2 - 1,
    honor: Math.random()
}