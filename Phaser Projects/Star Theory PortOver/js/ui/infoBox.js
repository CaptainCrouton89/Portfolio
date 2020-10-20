"use strict"

class InfoBox {

    constructor(scene, entity, present, side) {

        this.MENU_BOX_WIDTH = gameConfig.width / 5;
        this.MENU_BOX_HEIGHT = gameConfig.height;
        this.PADDING = 5;

        this.entity = entity;
        this.present = present;
        this.scene = scene;
        this.side = side;

        this.xOrigin;

        if (side === "right") {
            this.xOrigin = gameConfig.width - this.MENU_BOX_WIDTH;
        } else if (side === "left") {
            this.xOrigin = 0;
        }
        this.infoContainer = this.scene.add.container(this.xOrigin, 0); // replace this with creating a container without attaching it to a scene

        this.backGroundBox = this.scene.add.graphics();
        this.backGroundBox.fillStyle(0x222222, 0.8);
        this.backGroundBox.fillRect(0, 0, this.MENU_BOX_WIDTH, this.MENU_BOX_HEIGHT);
        this.backGroundBox2 = this.scene.add.graphics();
        this.backGroundBox2.fillStyle(0xffffff, .2);
        this.backGroundBox2.fillRect(this.PADDING, this.PADDING, this.MENU_BOX_WIDTH - 2*this.PADDING, this.MENU_BOX_HEIGHT-2*this.PADDING);
        
        // Title text
        this.titleText = this.scene.make.text({
            x: this.MENU_BOX_WIDTH / 2,
            y: 20,
            text: "name",
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        this.titleText.setOrigin(.5, .5);

        // Description text: figure out how to do line breaks—a text box that fills up.
        // this.descriptionText = this.scene.make.text({
        //     x: this.MENU_BOX_WIDTH / 2,
        //     y: 20,
        //     text: "name",
        //     style: {
        //         font: '20px monospace',
        //         fill: '#ffffff'
        //     }
        // });
        // this.descriptionText.setOrigin(.5, .5);

        // Options
        this.options = new OptionBox(this.scene, this.entity, this.present)

        this.infoContainer.add([this.backGroundBox, this.backGroundBox2, this.titleText, this.options.getContainer()]);
    }

    update (entity) {
        // break apart infobox class to inherit most and have separate functionality for current location vs viewing
        this.entity = entity;
        this.titleText.setText(entity.name);
    }
}