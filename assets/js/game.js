/**
 * Filename: game.js
 * Description: The functionality of the game will be created in this file
 *
 **************************************************************************************************/

/**
 * Function Defintions
 **************************************************************************************************/
// Creating the function fight using function expressions
var fight = function (enemyName) {
    // Game States
    // "WIN" - Player robot has defeated all enemy-robots
    //    * Fight all enemy-robots
    //    * Defeat each enemy-robot
    // "LOSE" - Player robot's health is zero or less

    while (enemyHealth > 0) {
        // Ask user if they want to fight or skip
        var promptFight = window.prompt(
            "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
        );

        if (promptFight === "f" || promptFight === "fight" || promptFight === "FIGHT") {
            // Subtract the value of playerAttack from enemyHealth
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                userName +
                    " attacked " +
                    enemyName +
                    ". " +
                    enemyName +
                    " now has " +
                    enemyHealth +
                    " health remaining."
            );

            //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            //enemy attacks Player
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName +
                    " attacked " +
                    userName +
                    ". " +
                    userName +
                    " now has " +
                    playerHealth +
                    " health remaining."
            );
            // check player's health
            if (playerHealth <= 0) {
                window.alert(userName + " has died!");
            } else {
                window.alert(userName + " still has " + playerHealth + " health left.");
            }
        } else if (promptFight === "s" || promptFight === "skip" || promptFight === "SKIP") {
            window.alert(userName + " has chosen to skip the fight!");
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes, leave fight
            if (confirmSkip) {
                window.alert(userName + " has decided to skip this fight. Goodbye!");
                // Subtract money from user
                playerMoney -= 2;
            } else {
                fight();
            }
        } else {
            window.alert("You need to chose a valid option. Try again!");
        }
    }
};

/**
 * Main
 **************************************************************************************************/
// Get user's robot name and give the robot health and attack stats
var userName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log("The user's Robots name is " + userName);
console.log(playerAttack, playerHealth);

// Alert players the match has begun
window.alert("Welcome to Robot Gladiators!");

//Create enemy
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

for (var i = 0; i < enemyNames.length; i++) {
    enemyHealth = 50;
    fight(enemyNames[i]);
}
