//to animate the clock

//select elements
const secondsHand = document.getElementById('seconds-hand');
const minutesHand = document.getElementById('minutes-hand');
const hoursHand = document.getElementById('hours-hand');

//need to move to a degree based on a certain time

function getTime() {
    //new Date() object is a js object that grabs todays date
    const now = new Date();
    //now we can use the now variable to get the seconds, minutes and hours of the "now" or right now's time and date
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    //by logging out each variable the logout will have the time that moment
    //console.log(now);

    //need to create the time interval - 360 deg in a circle and 60 minutes/seconds: 360/6= 6 as the time interval
    const timeInterval = 6; 

    //using style.transform will be used to rotate it - you will need to add transform-origin in css to make sure it rotates from where you need it to.
    //adding the degrees dynamically and not to a fixed degee 'rotate(60deg)'
    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
    //console.log(seconds)
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds/10) + 'deg)'
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes/2) + 'deg)'



}
// call the function
//getTime();

//can use the function setInterval - get time and call it every 100 milliseconds; 1000 = 1 second
setInterval(getTime, 100)