function adjustVolumeDown(){
    document.querySelector('#audioWork').volume=parseFloat(document.querySelector('#audioWork').volume)-0.1;
    document.querySelector('#audioRelax').volume=parseFloat(document.querySelector('#audioWork').volume)-0.1;
    document.querySelector('#audioEndtime').volume=parseFloat(document.querySelector('#audioWork').volume)-0.1;
    $('.volume').text(document.querySelector('#audioEndtime').volume)
    

}
function adjustVolumeUp(){
    document.querySelector('#audioWork').volume=parseFloat(document.querySelector('#audioWork').volume)+0.1;
    document.querySelector('#audioRelax').volume=parseFloat(document.querySelector('#audioWork').volume)+0.1;
    document.querySelector('#audioEndtime').volume=parseFloat(document.querySelector('#audioWork').volume)+0.1;
    $('.volume').text(document.querySelector('#audioEndtime').volume)
}
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
var timeinterval;
function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            document.getElementById('audioEndtime').play();
            clearInterval(timeinterval);
        }
    }

    updateClock();
    timeinterval = setInterval(updateClock, 1000);
}

function startWork() {
    clearInterval(timeinterval);
    $('#status').text('Time to work')
    document.getElementById('audioWork').play();
    var deadline = new Date(Date.parse(new Date()) + 25 * 60 * 1000);
    initializeClock('clockdiv', deadline);
}

function startRelax() {
    clearInterval(timeinterval);
    $('#status').text('Time to realax')
    document.getElementById('audioRelax').play();
    var deadline = new Date(Date.parse(new Date()) + 5 * 60 * 1000);
    initializeClock('clockdiv', deadline);
}
// $(document).ready(function () {
    
// });
