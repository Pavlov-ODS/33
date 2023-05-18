const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  displayTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  },

  changeTimeBySeconds(seconds) {
    const totalSeconds =
      this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
    this.hours = Math.floor(totalSeconds / 3600) % 24;
    this.minutes = Math.floor(totalSeconds / 60) % 60;
    this.seconds = totalSeconds % 60;
  },

  changeTimeByMinutes(minutes) {
    this.changeTimeBySeconds(minutes * 60);
  },

  changeTimeByHours(hours) {
    this.changeTimeBySeconds(hours * 3600);
  },
};

time.displayTime(); 

time.changeTimeBySeconds(150); 
time.displayTime(); 

time.changeTimeByMinutes(75); 
time.displayTime(); 

time.changeTimeByHours(3); 
time.displayTime(); 
