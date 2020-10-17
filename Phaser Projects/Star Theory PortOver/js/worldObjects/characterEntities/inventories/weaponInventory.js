"use strict"

class WeaponInventory extends Inventory {

    constructor(owner) {
        super(owner);
        this.contents = []
    }

    getWeaponsOfType(type) {
        let weaponsList = [];
        this.contents.forEach(weapon => {
            if (weapon.type === type) {
                weaponsList.push(weapon);
            }
        });
        return weaponsList;
    }

    
}