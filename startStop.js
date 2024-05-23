const starStop = {
    init: {
        buttonStop: {
            x: 500,
            y: 300,
            w: 100,
            h: 40,
            txt: "stop",
            color: "red"
        },

        buttonStart: {
            x: 100,
            y: 300,
            w: 100,
            h: 40,
            txt: "start",
            color: "green"
        }
    },
    draw: function () {
        this.drawButtons(this.init.buttonStart.txt, this.init.buttonStart.x, this.init.buttonStart.y,this.init.buttonStart.w,this.init.buttonStart.h, this.init.buttonStart.color)
        this.drawButtons(this.init.buttonStop.txt, this.init.buttonStop.x, this.init.buttonStop.y,this.init.buttonStop.w,this.init.buttonStop.h, this.init.buttonStop.color)
        this.drawCircle(250, 300)

    },
    drawButtons: function (txt, x, y,w,h, color) {
        fill(color)
        textSize(30);
        rect(x, y, w, h);
        fill("black")
        text(txt, x + 20, y + 30)

    },
    drawCircle: function (x, y) {
        fill("black")
        circle(x, y, 15)
    },
    checkCilcked: function () {
        

    }



}