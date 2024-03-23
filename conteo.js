const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalDate = document.querySelector('.conteoFestejo');


const countdownDate = new Date('Apr 20, 2024 20:00:00').getTime();

let interval = setInterval(function(){
    const now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    $days.innerHTML = days;
    $hours.innerHTML = ('0'+ hours).slice(-2);
    $minutes.innerHTML = ('0'+ minutes).slice(-2);
    $seconds.innerHTML = ('0'+ seconds).slice(-2);

    if(distance < 0){
        clearInterval(interval);
        $finalDate.style.display = 'none';
    }
},1000);

