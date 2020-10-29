class Weapon extends Module {

    constructor(key) {
        // uses weapon info from config to initialize
        super(key);
        this.mounting = this.config[mounting];
        this.type = this.config[type];
        this.damage = this.config[damage];
        this.range = this.config[range];
        this.reset();
    }

};
