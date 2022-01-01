let Username = new URLSearchParams(window.location.search).get('name');
let UserDay = new URLSearchParams(window.location.search).get('day');
let UserMonth = new URLSearchParams(window.location.search).get('month');

let getSecond = document.querySelector("#sec h1");
let getMinute = document.querySelector("#min h1");
let getHour = document.querySelector("#hour h1");
let getDay = document.querySelector("#day h1");
let getMilliSec = document.querySelector("#milli_sec h1");
let getUsername = document.querySelector("#user");


getUsername.innerHTML = Username;


 
let birthDay = UserDay + " " + UserMonth + " " + "2022";
    

let countdown = function () {

    let newBirthDay = new Date(birthDay);
    let currentDate = new Date();

    let diffDate = newBirthDay - currentDate;
    let totalSeconds = diffDate/1000;
    let milliSeconds = diffDate % 60;
    let seconds = Math.floor(totalSeconds) % 60;
    let minutes = Math.floor(totalSeconds/60) % 60;
    let hours = Math.floor(totalSeconds/3600) % 24;
    let days = Math.floor(totalSeconds/3600/24);

    getSecond.innerHTML = seconds;
    getMinute.innerHTML = minutes;
    getHour.innerHTML = hours;
    getDay.innerHTML = days;
    getMilliSec.innerHTML = milliSeconds;
    
}

if (new Date() > new Date(birthDay)) {
    alert("omo your Birthday don pass oooo if not pls check the day u input wella");
    window.location.replace('index.html');
} else{
    setInterval(countdown, 100);
}




/*
 


if (currentDate > newBirthDay) {
    alert.log("omo your Birthday don pass oooo if not pls check the day u input wella");
    window.location.replace('/index.html');
} else{
    
}


 *  let birthDay = "4 Nov 2022";
    alert(birthDay)
    newBirthDay = new Date(birthDay);
    currentDate = new Date(); 
    
    let diffDate = newBirthDay - currentDate;
    let totalSeconds = diffDate/1000;
    let milliSeconds = diffDate % 60;
    let seconds = Math.floor(totalSeconds) % 60;
    let minutes = Math.floor(totalSeconds/60) % 60;
    let hours = Math.floor(totalSeconds/3600) % 24;
    let days = Math.floor(totalSeconds/3600/24);

    getSecond.innerHTML = seconds;
    getMinute.innerHTML = minutes;
    getHour.innerHTML = hours;
    getDay.innerHTML = days;
    getMilliSec.innerHTML = milliSeconds;
     
 


    getSecond.innerHTML = seconds;
    getMinute.innerHTML = minutes;
    getHour.innerHTML = hours;
    getDay.innerHTML = days;
    getMilliSec.innerHTML = milliSeconds;
 */
