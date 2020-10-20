"use strict"

class InfoBox {

    constructor(scene, entity) {

        this.MENU_BOX_WIDTH = gameConfig.width / 5;
        this.MENU_BOX_HEIGHT = gameConfig.height;
        this.PADDING = 5;

        this.scene = scene;
        this.entity = entity;

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

       
    }

    update(entity) {
        this.entity = entity;
        this.titleText.setText(entity.name);
    }

    build(container) {
        container.add([this.backGroundBox, this.backGroundBox2, this.titleText]);
    }
}