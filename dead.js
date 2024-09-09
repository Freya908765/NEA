let RetryButton, MenuButton, title;

function preload() {
    bgImg = loadImage('assets/bgDead.png')
}

function setup() {
    createCanvas(384, 216, 'pixelated x4');
    background(bgImg);
    textSize(32);

    //Navigation bar buttons
    RetryButton = createButton('Retry');
    RetryButton.class("button");
    RetryButton.position(width * 2.22, height * 2);
    RetryButton.mousePressed(retry);

    MenuButton = createButton('Menu');
    MenuButton.class("button");
    MenuButton.position(width * 2.22, height * 2.5);
    MenuButton.mousePressed(menu);
}

function draw() {
    text("YOU HAVE DIED", width*0.2, height*0.15)
}

function retry() {
    window.open("game.html", "_self")
}

function menu() {
    window.open("index.html", "_self")
}
