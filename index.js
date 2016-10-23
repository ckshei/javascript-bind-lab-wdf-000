const digitalClock = {
  time: Math.round(Date.now() / 1000), 
  startTicking() {
    setInterval(function(){this.time++}.bind(this), 1000);
  }
}

function censor(word, string) {
  var re = new RegExp(word, "g");
  return string.replace(re, "BLEEP")
}

const violenceCensor = censor.bind(null, 'violence')

const drugsCensor = censor.bind(null, 'drugs')
