var audio = document.getElementById("audio");
function audioPlay(){
    var button = document.getElementById("play");
    if(audio.paused) {
        audio.play();
        button.textContent = "||";
    } else {
        audio.pause();
        button.textContent= "Play";
    }
}


function audioRestart() {
        audio.currentTime = 0;
}

function audioAdelantar (value) {
        audio.currentTime += value;
}

function audioRetroceder (value) {
    audio.currentTime -= value;
}

function bajarVolumen (){
    audio.volume -= .2;
}
function subirVolumen (){
    audio.volume += .2;
}

function audioStop(){
    audio.load();
}



audio.ontimeupdate = function() {

   var barraProgreso = document.getElementById("barra");

  barraProgreso.value = audio.currentTime;

};
