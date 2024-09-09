let LoadButton, KeybindsButton, HighscoreButton, SettingsButton, title;

function preload() {
    bgImg = loadImage('assets/bg.png')
}

function setup() {
    createCanvas(384, 216, 'pixelated x4');
    background(bgImg);
    textSize(32);

    //Navigation bar buttons
    AudioButton = createButton('Audio');
    AudioButton.class("button");
    AudioButton.position(width * 2.28, height * 1.5);

    KeybindsButton = createButton('Keybinds');
    KeybindsButton.class("button");
    KeybindsButton.position(width * 2.2, height * 2);

    DeleteButton = createButton('Delete Save');
    DeleteButton.class("button");
    DeleteButton.position(width * 2.14, height * 2.5);
    
    BackButton = createButton('Back');
    BackButton.class("button");
    BackButton.position(width * 2.29, height * 3);
    BackButton.mousePressed(back);
}

function draw() {
    text("SETTINGS", width*0.32, height*0.15)
}

function back() {
    window.open("index.html", "_self")
}
