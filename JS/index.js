
// all important constants
const audio = new Audio("./gunsound.mp3");
const player1 = document.getElementById("p1");
const player2 = document.getElementById("p2");
const startBtn = document.getElementById("startBtn");
const p1FireBtn = document.getElementById("p1fire");
const p2FireBtn = document.getElementById("p2fire");
const bullet1 = document.getElementById("bullet1");
const bullet2 = document.getElementById("bullet2");
const p1woncnt = document.getElementById("p1woncnt");
const p2woncnt = document.getElementById("p2woncnt");
const gameStatus = document.getElementById("gameStatus");
const p1HealthRange = document.getElementById("p1Health");
const p2HealthRange = document.getElementById("p2Health");

// To track winnig count
let player1WinCnt;
let player2WinCnt;
let p1Health;
let p2Health;

// game starts when clicked on start
startBtn.addEventListener("click", () => {
    p1FireBtn.style.display = "block";
    p2FireBtn.style.display = "block";
    // sets the initial values.
    player1WinCnt = 0;
    player2WinCnt = 0;
    p1Health = 100;
    p2Health = 100;
    p1HealthRange.value = p1Health;
    p2HealthRange.value = p2Health;
    gameStatus.innerHTML = " ";
    p1woncnt.innerHTML = `${0}`;
    p2woncnt.innerHTML = `${0}`;
    startBtn.disabled = true;
})


// This logic handles the cases when player1 fires the Bullet

p1FireBtn.addEventListener("click", async (event) => {

    bullet1.style.display = "block";
    player1WinCnt++;
    p2Health = p2Health - 20;
    p2HealthRange.value = p2Health;

    audio.play();

    // This block of code animates the player or gives a shock effect when shoots a bullet
    if (!player1.classList.contains("animatep1")) {
        player1.classList.add("animatep1");
    }
    setTimeout(() => {
        if (player1.classList.contains("animatep1")) {
            player1.classList.remove("animatep1");
        }
    }, 600);

    //   This overs the game when game round reaches the count 5
    if (player1WinCnt == 5) {
        console.log("Player 1 has won the game")
        setTimeout(() => {
            gameStatus.innerText = " ";
        }, 2000)
        gameStatus.innerText = "Player 1 has won the game.";
        startBtn.disabled = false;
        p1FireBtn.style.display = "none";
        p2FireBtn.style.display = "none";
    }

    // updating the won count of a player from here
    p1woncnt.innerHTML = `${player1WinCnt}`;

    // This loop is for animating the bullet towards the second player
    for (let i = 32; i < 75; i++) {


        await new Promise((resolve, reject) => {
            setTimeout(() => {
                bullet1.style.left = `${i}%`;
                resolve();
            }, 10);
        })


    }

    // hidding the bullet after hitting the next player and bringing bullet back to its initial position
    bullet1.style.display = "none";
    bullet1.style.left = "32%";
})




p2FireBtn.addEventListener("click", async (event) => {
    bullet2.style.display = "block";
    player2WinCnt++;
    p1Health = p1Health - 20;
    p1HealthRange.value = p1Health;

    audio.play();
    // This block of code animates the player or gives a shock effect when shoots a bullet
    if (!player2.classList.contains("animatep2")) {
        player2.classList.add("animatep2");
    }
    setTimeout(() => {
        if (player2.classList.contains("animatep2")) {
            player2.classList.remove("animatep2");
        }
    }, 600);

    //   This overs the game when game round reaches the count 5

    if (player2WinCnt == 5) {
        setTimeout(() => {
            gameStatus.innerText = " ";
        }, 2000)
        gameStatus.innerText = "Player 2 has won the game.";
        console.log("Player 2 has won the game")

        startBtn.disabled = false;
        p1FireBtn.style.display = "none";
        p2FireBtn.style.display = "none";
    }
    // updating the won count of a player from here
    p2woncnt.innerHTML = `${player2WinCnt}`;

    // This loop is for animating the bullet towards the first player

    for (let i = 32; i < 75; i++) {


        await new Promise((resolve, reject) => {
            setTimeout(() => {
                bullet2.style.right = `${i}%`;
                resolve();
            }, 10);
        })


    }

    // hidding the bullet after hitting the next player and bringing bullet back to its initial position

    bullet2.style.display = "none";
    bullet2.style.right = "32%";
})
