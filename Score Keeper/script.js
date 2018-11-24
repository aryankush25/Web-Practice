var p1 = 0;
var p2 = 0;
var endAt = 5;

var endAtInput = document.querySelector("input");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var reset = document.querySelector("#reset");

var pscore1 = document.getElementById("ps1");
var pscore2 = document.getElementById("ps2");
var endAts = document.getElementById("endAt");

var gameOver = false;

button1.addEventListener("click", function() {
    if (!gameOver) {
        p1++;
        pscore1.textContent = p1;
        if (p1 === endAt) {
            gameOver = true;
            pscore1.style.color = "green";
        }
    }
});

button2.addEventListener("click", function() {
    if (!gameOver) {
        p2++;
        pscore2.textContent = p2;
        if (p2 === endAt) {
            gameOver = true;
            pscore2.style.color = "green";
        }
    }
});

reset.addEventListener("click", function() {
    resetFunc();
});

endAtInput.addEventListener("change", function() {
    resetFunc();
    endAt = Number(endAtInput.value);
    endAts.textContent = endAt;
});


function resetFunc() {
    p1 = 0;
    p2 = 0;
    gameOver = false;
    pscore1.textContent = p1;
    pscore2.textContent = p2;
    pscore1.style.color = "black";
    pscore2.style.color = "black";
}