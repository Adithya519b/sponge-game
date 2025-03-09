var resultshow = document.querySelector(".resultdiv");
var showscore = document.querySelector("#score");
var compimg = document.getElementById("computer-img"); // Changed ID to computer-img
var userimg = document.querySelector("#userchoice");
var fireimg = document.querySelector("#fire");
var waterimg = document.querySelector("#water");
var spongeimg = document.querySelector("#sponge");

var user = "";
var computer="";

// Add event listeners to divs for selecting fire, water, or sponge
fireimg.addEventListener("click", function() { selectfire(); });
waterimg.addEventListener("click", function() { selectwater(); });
spongeimg.addEventListener("click", function() { selectsponge(); });

function selectfire() {
    user = "fire";
    userimg.setAttribute("src", "images/fire.png"); // Display the user's choice
}

function selectwater() {
    user = "water";
    userimg.setAttribute("src", "images/images.jpg"); // Display the user's choice
}

function selectsponge() {
    user = "sponge";
    userimg.setAttribute("src", "images/sponge.jpg"); // Display the user's choice
}

function check() {
    // Generate a random number between 0 and 2
    var computerChoice = Math.floor(Math.random() * 3); // 0: fire, 1: water, 2: sponge

    // Use the random number to assign the computer's choice
    if (computerChoice === 0) {
        compimg.setAttribute("src", "images/fire.png");
        console.log("computer: fire");
        computer="fire"
    } else if (computerChoice === 1) {
        compimg.setAttribute("src", "images/images.jpg");
        console.log("computer: water");
        computer="water"
    } else {
        compimg.setAttribute("src", "images/sponge.jpg");
        console.log("computer: sponge");
        computer="sponge"
    }
    if(computer==user){
        showscore.textContent="Tie!!"
    }
    else if(computer=="fire" && user=="sponge"){
        showscore.textContent="Computer won!"
    }
    else if(computer=="sponge" && user=="water"){
        showscore.textContent="Computer won!"
    }
    else if(computer=="water" && user=="fire"){
        showscore.textContent="Computer won!"
    }
    else{
        showscore.textContent="You won!!"
    }
    console.log("user: " + user);
    document.querySelector("#computerchoice").style.display = "block";
    document.querySelector("#yourchoice").style.display = "block"; // Make user's choice visible as well
}
