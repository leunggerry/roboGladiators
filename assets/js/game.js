/**
 * Filename: game.js
 * Description: The functionality of the game will be created in this file
 * 
 **************************************************************************************************/


/**
 * Function Defintions
 **************************************************************************************************/
// Creating the function fight using function expressions
var fight = function() {
    // Alert players the match has begun
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of playerAttack from enemyHealth
    enemyHealth = enemyHealth - playerAttack;
    console.log(userName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    //check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //enemy attacks Player
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + userName + ". " + userName + " now has " + playerHealth + " health remaining.");
    // check player's health
    if (playerHealth <= 0) {
        window.alert(userName + " has died!");
    } 
    else {
        window.alert(userName + " still has " + playerHealth + " health left.");
    }
}


/**
 * Main  
 **************************************************************************************************/
// Get user's robot name and give the robot health and attack stats
var userName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log("The user's Robots name is " + userName);
console.log(playerAttack, playerHealth);

//Create enemy 
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


fight();

