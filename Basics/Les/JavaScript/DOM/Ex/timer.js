const countDownDate = new Date("November 4, 2023 11:11:00").getTime();

const timer = setInterval(function() {
    let timeNow = new Date().getTime();
    console.log(timeNow)
    let remaining = countDownDate - timeNow;
    let days = Math.floor(remaining / (1000 * 60 * 60 * 24)); // remaining miliseconds/# miliseconds in a day
    let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // remaining miliseconds/# miliseconds in a day -> what is left over via % delen door # miliseconds in an hours
    let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)); // remaining miliseconds/# miliseconds in an hour -> what is left over via % delen door # miliseconds in a minute
    let seconds = Math.floor((remaining % (1000 * 60)) / 1000); // remaining miliseconds/# miliseconds in a minute -> what is left over via % delen door # miliseconds
    document.getElementById("daysNum").innerHTML = days
    document.getElementById("hoursNum").innerHTML = hours
    document.getElementById("minsNum").innerHTML = minutes
    document.getElementById("secsNum").innerHTML = seconds
    if (remaining < 0) {
        clearInterval(setInterval);
        document.getElementById("daysNum").innerHTML = ""
        document.getElementById("hoursNum").innerHTML = "" 
        document.getElementById("minsNum").innerHTML = ""
        document.getElementById("secsNum").innerHTML = ""
    }

    }, 1000)

   

