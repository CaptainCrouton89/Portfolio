class SelectedEntityInfoBox extends InfoBox {

    constructor(scene, entity) {
        super(scene, entity);
        this.infoContainer = this.scene.add.container(0, 0); // replace this with creating a container without attaching it to a scene
        this.build(this.infoContainer);
    }

    update (entity) {
        super.update(entity);
    }
}