const clock = document.querySelector('.timer');

let seconds = 0, minutes = 0, hours = 0, intervalId;


const startTimer = () => {

  intervalId = setInterval(()=> {

    if(seconds < 59) seconds++;
    else {
      seconds = 0;  
      if(minutes < 59)  minutes++;
      else {
        minutes = 0;
        hours++;
      }
    }

    const hoursElem = String(hours).padStart(2, "0");
    const minutesElem = String(minutes).padStart(2, "0");
    const secondsElem = String(seconds).padStart(2, "0");

    clock.innerText = `${hoursElem}:${minutesElem}:${secondsElem}`;

  }, 1000);  

};

const stopTimer = () => {
  clearInterval(intervalId);
};
