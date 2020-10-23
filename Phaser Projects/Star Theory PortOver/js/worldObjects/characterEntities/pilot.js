"use strict"

class Pilot {
    constructor () {
        this.reputation;
        this.honor;
        this.factionAffinity;
        this.inventory = new InventoryManager(this);
    }
}