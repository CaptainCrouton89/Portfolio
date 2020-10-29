'use strict';

class aiShip extends Ship {

    constructor (shipGenerationConfig) {
        super();
        this.shipGenerationConfig = shipGenerationConfig;

        // Initializes base stats for randomly generated ships
        if (this.hipGenerationConfig) {
            this.generateStats(shipGenerationConfig);
        } else {
            // Brand new, empty ship. For the player
            this.baseStats = {
                space: 100,
                speed: 1
            };
        }
    }

    generateStats (config) {
        let player = StarTheory.gameManager.player;
        // determine reputation
        if (!config[reputation]) {
            this.reputation = Math.floor(Math.random() * 1000); // figure out how to skew this down
        } else {
            this.reputation = config.reputation;
        }

        // determine honor
        if (!config[reputation]) {
            this.reputation = Math.random(); // figure out how to skew this down
        } else {
            this.reputation = config.reputation;
        }
    }
};
