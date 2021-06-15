/*const deg = 6;
const hr =document.querySelector('#hr');
const mn =document.querySelector('#mn');
const sc =document.querySelector('#sc');
setInterval(()=>{
    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()*deg;
    let ss=day.getSeconds()*deg;
    hr.style.transform = `rotateZ(${(mm)}deg)`;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    hr.style.transform = `rotateZ(${(ss)}deg)`;
}

)*/
setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
  
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

