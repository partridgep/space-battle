// class Ship
class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
};

// game object
const game = {
    title: "Space Battle",
    ussAssembly: new Ship('USS Assembly', 20, 5, 0.7),
    alienShip: new Ship('Millenium Falcon', 4, 3, 0.7),
    
    //attack method
    attack: function(attacker, attacked) {
        if (Math.random() < attacked.accuracy) {
            console.log(`${attacked.name} has been hit!`);
        }
        else {
            console.log(`${attacker.name} has missed!`);
        }
    },
    
};

console.log(game.attack(game.ussAssembly, game.alienShip));



    /*
    alienShips = ['Millenium Falcon'],

    //generate our ship
    generateUSS: function () {
        let UssAssembly = new Ship('USS Assembly', 20, 5, 0.7);
        return UssAssembly;
    },

    //generate alien ships
    generateAlienShips: function() {
        for(let ship of alienShips) {
            let alienShip = new Ship(ship, 5, 4, 0.5);
        }
    return alienShips;
    }
    */


//console.log(game.alienShip);