window.onload = function() {
    var color = [
        "rgb(255, 0, 0)",
        "rgb(255, 255, 0)",
        "rgb(0, 255, 0)",
        "rgb(0, 255, 255)",
        "rgb(0, 0, 255)",
        "rgb(255, 0, 255)"
    ];
    
    var squares = document.querySelectorAll(".square");
    var pickedColor = color[3];
    var colorDisplay = document.getElementById("colorDisplay");
    
    colorDisplay.textContent = pickedColor;
    
    for(let i = 0; squares.length; i++) {
        //squares[i].setAttribute("style", "background-color: ${squares[i]}");
        squares[i].style.backgroundColor = color[i];
        
        squares[i].addEventListener("click", function() {
            //alert("clicked " + (i + 1) + " square");
            var clickedColor = this.style.backgroundColor;
            
            if (clickedColor === pickedColor) {
                alert("You Won !!!");
            } else {
                this.style.backgroundColor = document.querySelector("body").style.backgroundColor;
            }
            
            
        });
    }
}