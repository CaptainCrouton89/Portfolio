class Weapon {

    constructor(weaponConfig) {
        // uses weapon info from config to initialize
        this.weaponConfig = weaponConfig;
        this.position = 0;
        
        this.weaponSpeed = weaponConfig[speed]
    }
}