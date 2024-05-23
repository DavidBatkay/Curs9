class TimeClass {
    
    constructor(hour = "hh", min= "mm",sec = "ss"){
        this.hour=hour;
        this.min=min;
        this.sec=sec;
    }

    updateDate()
    {
        this.hour = new Date().getHours();
        this.min = new Date().getMinutes();
        this.sec = new Date().getSeconds();


    }
}

const timeClass = new TimeClass()