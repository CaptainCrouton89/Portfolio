class CurrentEntityInfoBox extends InfoBox {

    constructor(scene, entity) {
        super(scene, entity)
        this.infoContainer = this.scene.add.container(gameConfig.width - this.MENU_BOX_WIDTH, 0); // replace this with creating a container without attaching it to a scene
        this.build(this.infoContainer);
    }

    update(entity) {
        super.update(entity);
        this.entity = entity
    }
}