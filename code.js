//use this to comment on js
//write a function to play CRAPS in index.html
function playCraps() {//the bracket 
    console.log("playCraps() started");//console.log tells the console that we are trying to do something, end wih terminator (;)
    //step 1: roll 2 6-sided dice
    //how to create a variable: use command "var" and = it to what you want it to be
    //ex. var x = "Porsche";
    //a string is x + x = PorschePorsche
    //Math.random()
    var die1;
    var die2;
    die1 = Math.ceil(Math.random() * 6);//I put Math.floor and Math.ceil on both dice so that I remember both functions
     //inclusive: includes 0; exclusive: excludes 0
    die2 = Math.floor(6 * Math.random()) + 1; //you can type it either way, 6 in front or behind
    //step 1b print result on screen 
    document.getElementById("die1res").innerHTML = die1;
    document.getElementById("die2res").innerHTML = die2;
    console.log("die1 is:" + die1);
    console.log("die2 is:" + die2);


    //step 2: calculate the sum of die1 and die2
    var dicesum = die1 + die2;
    console.log("The sum of the dice is:" + dicesum);
    document.getElementById("dicesum").innerHTML = dicesum;


    //step 3: does sum = 7 or 11 (are you a loser?)
    //how to do an if/then statement
    /*if(true){
        do this if conditions are true
    }else if(another true){
    }else if(another true), and so on*/
    if (dicesum == 7 || dicesum == 11) {

        (document.getElementById("gameres").innerHTML =
            "You lose! Play again?");
    
//step 4: aid the dice come up doubles? are they evens? if so, you win
    }else if (die1=die2 && die1%2==0){
        (document.getElementById("gameres").innerHTML =
            "You win! Play again?");

    //step 5: otherwise, push
    }else {
        (document.getElementById("gameres").innerHTML =
            "You did not lose or win, so you should try again.");
    }






}