window.onload = function() {
    var colors = generateRandomeColors(6);
    
    var squares = document.querySelectorAll(".square");
    var pickedColor = pickColor();
    var colorDisplay = document.getElementById("colorDisplay");
    var messageDisplay = document.querySelector("#message");
    var h1 = document.getElementsByTagName("h1")[0];
    var resetButton = document.querySelector("#reset");
    
    colorDisplay.textContent = pickedColor;
    
    resetButton.addEventListener("click", function() {
        colors = generateRandomeColors(6);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(let i = 0; i< squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
        }
        h1.style.backgroundColor = document.body.style.backgroundColor;
    });
    
    for(let i = 0; squares.length; i++) {
        //squares[i].setAttribute("style", "backgroundColor: ${squares[i]}");
        squares[i].style.backgroundColor = colors[i];
        
        squares[i].addEventListener("click", function() {
            //alert("clicked " + (i + 1) + " square");
            var clickedColor = this.style.backgroundColor;
            
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again !!!"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = document.body.style.backgroundColor;
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