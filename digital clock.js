
let ampm = document.getElementById('ampm')
function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    if (hr>12){
        hr = hr - 12
        ampm.innerHTML = 'am'
    }
    else{
        ampm.innerHTML='pm'
    }
    document.getElementById('hour').innerHTML = zero(hr)
    document.getElementById('min').innerHTML =  zero(min)
    document.getElementById('sec').innerHTML =  zero(sec)
}
function  zero(num){
    return num<10?"0"+num:num
}
setInterval(displayTime,500)
   