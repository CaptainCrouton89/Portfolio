'use strict';

class Module {

    constructor(key) {
        this.config = StarTheory.cache.json.get(key);
        this.name = this.config['name'];
        this.description = this.config['description'];
        this.skills = this.config['skills'];
        this.reset();
    }

    reset() {
        // Resets all states to ready state
        this.ready = true; // Set to false when crew member is assigned to it, set to true when cooldown finishes.
        this.timeUntilAction = this.config['timeInvestment']; // Float count down tracking how long a crew member must man the station
        this.coolingDown = false; // Set to true when firing weapon, set to false after cooldown finishes.
        this.coolDown = this.config['coolDown']; // Float count down tracking how long until weapon can be fired again
        this.timeUntilEffect = this.config['delay']; // Float count down tracking how long until weapon effect occurs
    }

    getStat(attr) {
        return this.config[attr];
    }
};
