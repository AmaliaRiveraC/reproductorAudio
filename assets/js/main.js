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
document.getElementById('stopButton').onclick = function() {
 var sounds = document.getElementsByTagName('audio');
 for(i=0; i<sounds.length; i++) sounds[i].pause();
};





function progresoAudio() { 
    var oAudio = document.getElementById("audio"); 
    //get current time in seconds
    var elapsedTime = Math.round(oAudio.currentTime);
                //update the progress bar
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
                    //clear canvas before painting
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        ctx.fillStyle = "rgb(255,0,0)";
        var fWidth = (elapsedTime / oAudio.duration) * (canvas.clientWidth);
        if (fWidth > 0) {
                    ctx.fillRect(0, 0, fWidth, canvas.clientHeight);
    }
                }
            }

function mostrarDuracion() {
	   if(duracion>0)
	{
		porcentaje=miAudio.currentTime*100/duracion;
		document.getElementById("duracion").getElementsByTagName("span")[0].style.width=porcentaje+"px";
		document.getElementById("duracion").getElementsByTagName("div")[0].innerHTML=parseInt(porcentaje)+"%";
	}
}