var clock = function(nazhigai, min, vinadi) {
    this.nazhigai = nazhigai;
    this.min = min;
    this.vinadi = vinadi;
}

var trigger = function() {
    const date = new Date().getDate() + "";
    const month = new Date().getMonth()+1 + "";
    const year = new Date().getFullYear() + "";
    const today = new Date(`${month}/${date}/${year}`).getTime();
    const now = new Date().getTime();
    let nazhigai = Math.round(((now-today)/1000)/1440).toString();
    if(nazhigai.length === 1) {
        nazhigai = "0"+nazhigai;
    }
    document.getElementById('nazhigai').innerText = nazhigai;
}

setInterval(trigger, 1000);