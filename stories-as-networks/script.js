const hexagon = document.getElementById("hexagon");
let rotation = 0;

function rotateHexagon() {
    rotation += 1;
    hexagon.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(rotateHexagon);
}

rotateHexagon();