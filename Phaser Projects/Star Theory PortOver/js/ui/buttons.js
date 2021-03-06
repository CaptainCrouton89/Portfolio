"use strict"

class Clickable extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);

        this.setInteractive();
    }
}


class Button extends Clickable {

    constructor(scene, x, y, texture, actionOnClick, context, frame) {
        super(scene, x, y, texture, frame);
        this.on('pointerdown', this.pointerDown, this);
        this.on('pointerdown', actionOnClick, context);
        this.on('pointerout', this.hoverOff, this);
        this.on('pointerover', this.hoverButton, this);
        this.on('pointerup', this.pointerUp, this);
        this.scene = scene;
    }
    
    hoverButton () {
        this.scene.tweens.add({
            targets: this,
            duration: 10,
            scaleX: 1.1,
            scaleY: 1.1,
        });
    }

    hoverOff () {
        this.scene.tweens.add({
            targets: this,
            duration: 10,
            scaleX: 1,
            scaleY: 1
        });
    }

    pointerDown () {
        this.scene.tweens.add({
            targets: this,
            duration: 10,
            scaleX: 1,
            scaleY: 1
        });
    }

    pointerUp () {
        this.hoverButton();
    }
}

class PlanetButton extends Button {

    constructor(scene, x, y, texture, actionOnClick, context, frame) {
        super(scene, x, y, texture, actionOnClick, context, frame);
    }
}