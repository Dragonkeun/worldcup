const dDay = document.querySelector(".d-day");

function diffDay(){
    const worldCupStartTime = new Date("2022-11-20");
    const nowTime = new Date();
    const diff = worldCupStartTime - nowTime;
    const diffDay = Math.floor(diff / (1000*60*60*24));
    const diffHour = Math.floor((diff / (1000*60*60)) % 24);
    const diffMin = Math.floor((diff / (1000*60)) % 60);
    const diffSec = Math.floor(diff / 1000 % 60);

    dDay.innerText = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`; 
}

diffDay();
setInterval(diffDay, 1000);