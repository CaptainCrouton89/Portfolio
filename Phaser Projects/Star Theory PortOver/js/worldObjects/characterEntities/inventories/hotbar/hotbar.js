'use strict';

class Hotbar {

    constructor(inventoryManager, key, title) {
        this.inventoryManager = inventoryManager;
        this.key = key;
        this.title = title;
        this.contents = {
            '1': null,
            '2': null,
            '3': null,
            '4': null,
            '5': null,
            '6': null,
            '7': null,
            '8': null,
            '9': null,
            '0': null,
            '-': null,
            '=': null
        };
    }

    add(position, entity) {
        this.contents[position] = entity;
    }

    remove(position) {
        this.contents[position] = null;
    }

    getEntityAt(position) {
        return this.contents[position];
    }

    getContens() {
        return this.contents;
    }

};
