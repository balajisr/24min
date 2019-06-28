var clock = function(nazhigai, min, vinadi) {
    this.nazhigai = nazhigai;
    this.min = min;
    this.vinadi = vinadi;
}

var trigger = function() {
    const today = new Date().getTime();
    const now = new Date().getTime();
    const nazhigai = time/(24*60000);
}

setTimeout(trigger, 1000);