// variable initialization
let day = document.querySelector('#day');
let hr = document.querySelector('#hr');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
let ms = document.querySelector('#ms');
ms.textContent = 100;

// set milliseconds
 var y = setInterval(() => {
    if (ms.textContent > 0) {
        ms.textContent -= 1;
        if (ms.textContent == 0) {
            ms.textContent = 100;
        }
    }
    
 }, 10)
// Set the date we're counting down to
var countDownDate = new Date("Nov 4, 2020 00:10:00").getTime();

// Update the count down every 1 second
var x = setInterval(() => {
    

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the browser
    day.innerHTML = days;
    hr.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;


  // Reset afer countdown is finished
  if (distance < 0) {
    clearInterval(x);
    clearInterval(y);
    ms.textContent = 0;
  }
}, 1000);





// 
// sec.value = 60;
// min.value = 60;
// hr.value = 24;
// milliseconds();

// function milliseconds() {
//     setInterval(() => {
//         
//                 sec.value -= 1;
//                 sec.textContent = sec.value;
//                 if (sec.value == 0) {
//                     sec.value = 60;
//                     min.value -= 1;
//                     min.textContent = min.value;
//                     if (min.value == 0) {
//                         min.value = 60;
//                         hr.value -= 1;
//                         hr.textContent = hr.value;
//                         if (hr.value == 0) {
//                             hr.value = 24;
//                             day.value -= 1;
//                             day.textContent = day.value;
//                             if (day.value == 0) {
//                                 hr.value = 0;
//                                 min.value = 0;
//                                 sec.value = 0;
//                                 ms.value = 0;
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }, 10);
// }



