let display = document.getElementById('container');
let secondsHand = document.getElementById('second');
let minutesHand = document.getElementById('minute');
let hoursHand = document.getElementById('hour');

let now;

function setTimeNow(){
     now = new Date();

     let minutes = now.getMinutes();
     let hours = now.getHours()
    let meridian = hours > 12 ? "PM" : "AM"
    hours = hours % 12
     seconds = now.getSeconds()

     secondsHand.style.transform = `rotate(${(seconds * 6) + 90}deg)`;
     minutesHand.style.transform = `rotate(${(minutes * 6) + 90}deg)`;
     hoursHand.style.transform = `rotate(${(hours * 30) + 90}deg)`;

     console.log(hours,minutes,seconds,meridian)
}

setInterval(setTimeNow,1000)





