"use strict"

class Inventory {

    constructor(owner) {
        this.owner = owner;
        this.contents; // the datastructure used to hold inventory items
    }

    getInventoryList () {
        // return list of names of all objects in inventory?
    }

    add(itemDict) {
        // adds items to inventory
        // item dict has form {itemName: quantity, itemName: quantity}
    }

    remove(itemDict) {
        // removes items from inventory
        // item dict has form {itemName: quantity, itemName: quantity}
    }

}

/**
 * Implement multiple types of inventory. They all must have the methods defined above, though what they do behind the scenes can be different
 * 
 * 
 * Orrr... maybe not
 * 
 * 
 * Crew inventory: List of crewMember objects
 * 
 * Weapon Inventory: List of weapon objects
 * 
 * Module Inventory: List of module objects
 * 
 * Cargo Inventory: List of cargo objects
 */