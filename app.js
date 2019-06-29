var clock = function() {}

clock.prototype.pushTime = function(time) {
    document.getElementById('clock').innerText = `${time}`;
}

var trigger = function() {
    const date = new Date().getDate() + "";
    const month = new Date().getMonth()+1 + "";
    const year = new Date().getFullYear() + "";
    const today = new Date(`${month}/${date}/${year}`).getTime();
    const now = new Date().getTime();

    function msToTime(duration) {
        var seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 24),
          hours = Math.floor((duration / (1000 * 24 * 60)) % 60);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        return hours + ":" + minutes + ":" + seconds;
    }

    let time = msToTime(now-today);

    const clk = new clock();
    clk.pushTime(time);
}

setInterval(trigger, 1000);