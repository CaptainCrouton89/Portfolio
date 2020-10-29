'use strict';

class CrewMember {

    constructor() {
        this.factionLoyalty; // if you have good relations with the faction that your crew member is loyal to,
        // they perform better in the stat corresponding to that faction.

        // Never changes, both must add up to 1
        this.speed = Math.random();
        this.potency = 1 - this.speed;

        // Increase over time. Max out at 100?
        this.skills = {
            energy: Math.floor(Math.random() * 20),
            explosive: Math.floor(Math.random() * 20),
            kinetic: Math.floor(Math.random() * 20),
            piloting: Math.floor(Math.random() * 20),
            hacking: Math.floor(Math.random() * 20),
            repairing: Math.floor(Math.random() * 20)
        };

        this.specialities = [''] // correspond to faction govt type. ie authoritarian govt give specialties in obeying orders quickly or wtvr.

        this.isFirstMate = false; // Gives minor boost to all stats, and applies faction specialty to entire ship.
        this.factionDied = false; // If faction dies, they choose a new one, but suffere a temporary loss in stats. They will not pick up
        // new specialties.

    }
};

/**
 * Faction specialties: Will not be granted unless you have at least .5 loyalty to the faction they belong to.
 *
 */
