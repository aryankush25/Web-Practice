window.onload = function() {
    var numSquares = 6;
    var colors = generateRandomeColors(numSquares);
    var squares = document.querySelectorAll(".square");
    var pickedColor = pickColor();
    var colorDisplay = document.getElementById("colorDisplay");
    var messageDisplay = document.querySelector("#message");
    var h1 = document.getElementsByTagName("h1")[0];
    var resetButton = document.querySelector("#reset");
    var modeButtons = document.querySelectorAll(".mode");
    
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        });
    }
    
    resetButton.addEventListener("click", function() {
        reset();
    });
    
    function reset() {
        colors = generateRandomeColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(let i = 0; i< squares.length; i++) {
            if (colors[i]) {
                squares[i].style.display = "block";
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }
        h1.style.backgroundColor = "steelblue";
        messageDisplay.innerHTML = "";
        resetButton.innerHTML = "New Colors";
    }
    
    /*easyBtn.addEventListener("click", function() {
        easyBtn.classList.add("selected");
        hardBtn.classList.remove("selected");
        numSquares = 3;
        colors = generateRandomeColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(let i = 0; i< squares.length; i++) {
            if(colors[i]) {
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }
        h1.style.backgroundColor = "steelblue";
        messageDisplay.innerHTML = "";
        resetButton.textContent = "New Colors";
    });
    
    hardBtn.addEventListener("click", function() {
        hardBtn.classList.add("selected");
        easyBtn.classList.remove("selected");
        numSquares = 6;
        colors = generateRandomeColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(let i = 0; i< squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        h1.style.backgroundColor = "steelblue";
        messageDisplay.innerHTML = "";
        resetButton.textContent = "New Colors";
    });
    
    resetButton.addEventListener("click", function() {
        colors = generateRandomeColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(let i = 0; i< squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
        }
        h1.style.backgroundColor = "steelblue";
        messageDisplay.innerHTML = "";
        this.innerHTML = "New Colors";
    });*/
    
    colorDisplay.textContent = pickedColor;

    for(let i = 0; squares.length; i++) {

        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function() {
            //alert("clicked " + (i + 1) + " square");
            var clickedColor = this.style.backgroundColor;

            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct !!";
                resetButton.textContent = "Play Again !!!"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = document.body.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
    
    function changeColors(color) {
        for(let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = color;
        }
    }
    
    function pickColor() {
        let x = Math.floor(Math.random() * colors.length);

        return colors[x];
    }
    
    function generateRandomeColors(length) {
        var arr = [];
        
        for(let i = 0; i < length; i++) {
            arr.push(randomeColor());
        }
        
        return arr;
    }
    
    function randomeColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        
        let randColor = "rgb(" + r + ", " + g + ", " + b + ")";
        
        return randColor;
    }
    
}