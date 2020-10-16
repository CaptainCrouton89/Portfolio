class Background extends Phaser.GameObjects.Sprite {
    constructor(scene, texture) {
        super(scene, 0, 0, texture);
        scene.add.existing(this);
        this.setOrigin(0, 0);
        // this.setScale(1.39, 1.39);
    }
}
