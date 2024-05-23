function setup() {
    createCanvas(800, 600)
    setInterval(() => timeObject.countUp(), 1000)
    setInterval(() => timeClass.updateDate(), 1000)

}
function draw() {
    clear();
    background(200)
    textSize(100);
    text(timeObject.hour + ":" + timeObject.minutes + ":" + timeObject.seconds, 200, 200);
    text(timeClass.hour + ":" + timeClass.min + ":" + timeClass.sec, 200, 300);
    starStop.draw();

}