let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

function updateClock(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let am = (h >= 12) ? "PM" : "AM";// Determine AM/PM
    // Convert to 12-hour format
    if (h > 12) {
      h = h - 12;
    }
    if (h === 0) {
      h = 12;
    }
    
    // Add leading zeros
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    // Update the time display
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampm.innerText = am;

    // Call updateClock again after 1 second
    setTimeout(updateClock, 1000);

}
updateClock();