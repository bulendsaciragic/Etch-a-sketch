let gridSize = prompt("How many squares per side you want?")

if (gridSize > 64) {
    alert("Please keep the number of the squares per side less than 64.")
    let gridSize = prompt("How many squares per side you want?")
  }

const sketchboard = document.querySelector("#sketchboard");

for (let i = 0; i < (gridSize * gridSize); i++) {

    const squareDivHeight = sketchboard.clientHeight / gridSize;
    const squareDivWidth = sketchboard.clientWidth / gridSize;
    
    const squareDiv = document.createElement("div");
    squareDiv.setAttribute("class", "squareDiv");
    sketchboard.append(squareDiv);
    
    squareDiv.style.height = squareDivHeight + 'px';
    squareDiv.style.width = squareDivWidth + 'px';

    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }

    squareDiv.addEventListener("mouseover", function(){
    squareDiv.style.backgroundColor = "cadetblue";
    })

    squareDiv.addEventListener("mouseout", function(){
    squareDiv.style.backgroundColor = "";
    })

}
