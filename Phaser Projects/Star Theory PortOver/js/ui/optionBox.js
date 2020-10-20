"use strict"

class OptionBox {

    constructor(scene, entity, present) {
        this.entity = entity;
        this.present = present;
        this.scene = scene;
        this.optionContainer = this.scene.add.container(0, 0);
        // this.options = entity.getOptions();
        // returns {"trade": trade, "quest": quest}
    }

    render() {
        this.sprite = new PlanetButton(scene, 0, 0, 'starGate1', this.clicked, this);
    }

    getContainer () {
        return this.optionContainer;
    }
}