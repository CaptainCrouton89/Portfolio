"use strict"

class OptionBox {

    constructor(scene, options) {
        this.options = options;
        this.scene = scene;
        this.optionContainer = this.scene.add.container(0, 0);
        // this.options = entity.getOptions();
        // returns {"trade": trade, "quest": quest}
    }

    render() {
        this.sprite = new Button(scene, 0, 0, 'starGate1', this.clicked, this);
    }

    getContainer () {
        return this.optionContainer;
    }
}