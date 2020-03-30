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
    const css = getComputedStyle(document.getElementById('main_header')),
        mw = float(css.marginLeft) + float(css.marginRight),
        mh = float(css.marginTop) + float(css.marginBottom),
        ww = float(css.width) || windowWidth,
        wh = float(css.height) || windowHeight,
        w = round(ww - mw), h = round(wh - mh);

    resizeCanvas(w, h, true);
}

let c1, c2;
let t = 0;

function setup() {
    // Setup header

    width = windowWidth;
    height = width * 0.5;
    canvas = createCanvas(width, height);
    canvas.parent('main_header');
    canvas.style('display', 'block');
    canvas.position(0, 0);
    windowResized(); // immediately resize to fit
    canvas.style("z-index", "-1");
    canvas.style("filter", "blur(30px)");
}

function draw() {
    noStroke();
}

let trail = [];
let l = 80;
function mouseMoved() {
    clear();

    trail.push([mouseX, mouseY]);

    for (let i = 0; i < trail.length; i++) {
        // let c = color(170 + 60 * sin(i * 0.02 + t), 100 + 70 * sin(i * 0.015 + t), 200 + 200 * sin(i * 0.012 + t));
        let c = color(120 + 190 * sin(i * 0.06 + t), 130 + 190 * sin(i * 0.02 + t), 120 + 120 * sin(i * 0.09 + t));
        fill(c)
        ellipse(trail[i][0], trail[i][1], 200, 200);
    }
    if (trail.length == l) {
        trail.shift();
    }
    t += 0.03;

    let new_x = map(mouseX, 0, width, 0, 40);
    let new_blur = "blur(" + new_x + "px)";
    canvas.style("filter", new_blur);
    // canvas.style("filter", "blur(0px)");
}