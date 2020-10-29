'use strict';

class WeaponsInventory extends Inventory {

    constructor(owner) {
        super(owner);

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
};
