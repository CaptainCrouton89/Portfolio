"use strict"

class AiPilot extends Pilot {

    constructor(config) {


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
}