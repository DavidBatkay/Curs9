
const timeObject = {
    hour: 0,
    minutes: 0,
    seconds: 0,
    updateDate: function(){
        const d = new Date();
        this.hour = d.getHours()
        this.minutes = d.getMinutes()
        this.seconds = d.getSeconds()

    },

    countUp: function(){
     this.seconds++;
     if (this.seconds == 59){
        this.seconds = 0;
        this.minutes++;
     }
     if (this.minutes == 59){
        this.minutes = 0;
        this.hours++;
     }
     if (this.hours = 23)
     this.hour=0
    }
}

