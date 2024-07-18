const sketchboard = document.querySelector("#sketchboard");

let gridSize = 16;


for (let i = 0; i < 256; i++) {

    // const squareDivHeight = (sketchboard.offsetHeight - 2) / gridSize;
    // const squareDivWidth = (sketchboard.offsetHeight - 2) / gridSize;

    const squareDivHeight = sketchboard.clientHeight / gridSize;
    const squareDivWidth = sketchboard.clientWidth / gridSize;
    
    const squareDiv = document.createElement("div");
    squareDiv.setAttribute("class", "squareDiv");
    sketchboard.append(squareDiv);
    
    squareDiv.style.height = squareDivHeight + 'px';
    squareDiv.style.width = squareDivWidth + 'px';

}


