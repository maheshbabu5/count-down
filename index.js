const min = 10;
let time = min * 60;
const countdown = document.getElementById('count');
setInterval(updatetime,1000);
function updatetime(){
    const min = Math.floor(time/60);
    let sec = time % 60;
    sec = sec < 10 ? '0' + sec : sec ; 
    countdown.innerHTML = `${min}:${sec}`;
    time--;
}