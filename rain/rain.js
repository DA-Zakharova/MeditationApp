const timer = 5;
let amountTime = timer * 60;
let timerID = null;
const mainPar = document.querySelector(".mainText");

function calculateTime() {
    let minutes = Math.floor(amountTime / 60);
    let seconds = amountTime % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    mainPar.textContent = `${minutes}:${seconds}`;
    amountTime--;

    if (amountTime < 0) {
        stopTimer();
        amountTime = 0;
    }
}

function stopTimer() {
    clearInterval(timerID);
    timerID = null;
}

mainPar.addEventListener("click", () => {
    if (!timerID) {
        amountTime = timer * 60;
        calculateTime();
        timerID = setInterval(calculateTime, 1000);
    }
})