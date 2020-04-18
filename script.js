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
    //alienShip: new Ship('Enemy Ship', 4, 3, 0.7),
    alienShipNames: ['Enemy', 'Mean', 'Renegade', 'Curiosity', 'Optimus Prime', 'Sputnik'],
    alienShips: [],
    
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
                //remove first alien ship out of array
                this.alienShips.shift();
                //check if there are any remaining enemy ships
                if (this.alienShips.length > 0) {
                    //prompt user if they want to attack next ship or retreat
                    let answer = prompt('Would you like to attack the next ship or retreat?');
                    //if answer is retreat, game is over
                    if (answer.toLowerCase() === 'retreat')
                        {console.log('Game Over.');
                        //exit out of game
                        this.playing = false;}
                    else if (answer.toLowerCase() === 'attack') {
                        //attack next alien ship
                        this.attack(attacker, this.alienShips[0]);
                    }
                    }
                    else {
                        //exit out of game after hard earned victory
                        console.log('You saved Earth!');
                        this.playing = false;
                    }
                //if you are destroyed
                if (attacked.name === 'USS Assembly') {
                    console.log('You LOSE!');
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
            this.attack(attacked, attacker);
        }
    },

    //generate enemy ships function
    generateEnemies() {
        //iterate over list of alien ship names
        for(ship of this.alienShipNames) {
            //for each alien ship name:
            //give it its name
            let name = ship;
            //randomize its hull number between 3 and 6
            let hull = (Math.floor(Math.random() * (6-3+1) + 3));
            //randomize its firepower between 2 and 4
            let firepower = (Math.floor(Math.random() * (4-2+1) + 2));
            //randomize its accuracy between 0.6 and 0.8
            let accuracy = Math.random() * (0.8-0.6) + 0.6;
            //create a new Ship object with those values
            let alienShip = new Ship(ship, hull, firepower, accuracy);
            //add that object to the array of alien ships
            this.alienShips.push(alienShip);
        }
    },
    
    //play function
    play: function() {
        //get our array of enemies
        this.generateEnemies();
        //check the conditional loop
        while (this.playing === true) {
                //start the game by attacking first alien ship
                this.attack(this.ussAssembly, this.alienShips[0]);
        }
    }
}


console.log(game.play());
