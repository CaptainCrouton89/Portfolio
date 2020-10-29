'use strict';

class CrewInventory extends Inventory {

    constructor(inventoryManager) {
        super(inventoryManager);
        this.contents = [];

    }

    addCrewMember(crewMember) {
        this.contents.push(crewMember);
    }

    removeCrewMember(crewMember) {
        this.contents.remove(crewMember);
    }
};
