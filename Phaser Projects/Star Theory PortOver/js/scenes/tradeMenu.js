"use strict"

class TradeMenu {

    constructor(planet) {
        this.planet = planet
        this.cargoTradeMenu;
        this.modulesTradeMenu;
        this.crewTradeMenu;
    }

    generateRandomWares() {
        // uses this.planet to create it's own market. Maybe should be cargoTradeMenu method.
    }

    tickForward(ticks) {
        // Maybe this is cargoTradeMenu method
        // Move economy forward that many ticks. Maybe only applies to cargo prices, not modules and crew, which aren't as affected?
    }
}

/**
 * Multiple scenes, all overlayed on top of base trademenu scene. Each loads different content in the content box. 
 * Background scene "tradeMenu" is responsible for everything happening outside the content box, while specialized trademenus work inside. 
 * 
 * Question: Do specialized trademenus inherit from trademenu, or are components of it? Probably components.
 */