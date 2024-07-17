const sketchboard = document.querySelector("#sketchboard");

for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.setAttribute("id", "squareDiv");
    sketchboard.append(squareDiv);
}

