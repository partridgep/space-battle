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
    playing: true,
    ussAssembly: new Ship('USS Assembly', 20, 5, 0.7),
    alienShip: new Ship('Enemy Ship', 4, 3, 0.7),
    
    //attack method
    attack: function(attacker, attacked) {
        console.log(`${attacker.name} is attacking ${attacked.name}!`);
        //check if attack higher than attacked ship's directory
        if (Math.random() < attacked.accuracy) {
            //tell us the attacked ship has been hit
            console.log(`${attacked.name} has been hit!`);
            //remove hull points of attacked ship 
            attacked.hull = attacked.hull - attacker.firepower;
            //if hull reaches 0, keep it at 0 (no negative hull points)
            if (attacked.hull < 0) {attacked.hull = 0};
            //tell us remaining hull score of attacked ship
            console.log(`${attacked.name}'s hull is now ${attacked.hull}.`);
            //if the attacked ships' hull reached 0 and is destroyed
            if (attacked.hull === 0) 
                {console.log(`${attacked.name} has been DESTROYED!`);
                //if you are destroyed
                if (attacked.name === 'USS Assembly') {
                    console.log('You LOSE!');
                    //exit out of game
                    this.playing = false;
                }
                else //if you destroy the ship, you have the option to attack next ship or retreat
                    {
                        let answer = prompt('Would you like to attack the next ship or retreat?');
                        //if answer is retreat, game is over
                        if (answer.toLowerCase() === 'retreat')
                            {console.log('Game Over.')};
                            //exit out of game
                            this.playing = false;      
                    }
                }
            //else, attacked becomes the attacker
            else {
                this.attack(attacked, attacker);
            }
        }
        else {
            //tell us the attacking ship missed
            console.log(`${attacker.name} has missed!`);
        }
    },
    
    //play function
    play: function() {
        while (this.playing === true) {
            this.attack(this.ussAssembly, this.alienShip);
        }
    }
}


console.log(game.play());


//console.log(game.attack(game.alienShip, game.ussAssembly));



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