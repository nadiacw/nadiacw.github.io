let canvas;
let width = 0;
let height = 0;

// function windowResized() {
//     width = window.innerWidth;
//     height = windowWidth * 0.5;
//     resizeCanvas(width, height);
// }

// windowResized function by GoToLoop
// https://gist.github.com/GoToLoop/54b4c49e9c2541da2d91692bf0c01192
// removes scrollbars by using the computed width?
function windowResized() {
    const css = getComputedStyle(document.getElementById('header')),
        mw = float(css.marginLeft) + float(css.marginRight),
        mh = float(css.marginTop) + float(css.marginBottom),
        ww = float(css.width) || windowWidth,
        wh = float(css.height) || windowHeight,
        w = round(ww - mw), h = round(wh - mh);

    resizeCanvas(w, h, true);
}

let t = 0;

function setup() {
    // Setup header

    width = windowWidth;
    height = width * 0.5;
    canvas = createCanvas(width, height);
    canvas.parent('header');
    canvas.style('display', 'block');
    canvas.position(0, 0);
    windowResized(); // immediately resize to fit
    canvas.style("z-index", "-1");
    canvas.style("filter", "blur(50px)");

    blendMode(OVERLAY);
}

function draw() {
    noStroke();
    clear();
    fill("#D6FFB7");
    ellipse(mouseX * 0.13 + width * 0.5, mouseY * 0.1 + height / 2, mouseX * 0.2);
    fill("#EA526F");
    ellipse(mouseX * 0.1 + width * 0.7, mouseY * 0.12 + height * 0.4, mouseX * 0.19);
    fill("#B68CB8");
    ellipse(mouseX * 0.11 + width * 0.6, mouseY * 0.11 + height * 0.7, mouseX * 0.15);
}


// function mouseMoved() {
//     clear();

// }