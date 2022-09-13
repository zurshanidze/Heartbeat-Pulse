  let playPause = document.getElementById("play-pause");
  let text = document.getElementById("text");
  let heartBeat = document.getElementById("heartBeat");
  let textWrapper = document.getElementById("textWrapper");


playPause.addEventListener("click", () => { 
  
   if (circle1.style.animationPlayState != 'paused'){
  
      if(circle1.style.animationPlayState = 'running'){
        circle1.style.animationPlayState = 'paused';
        playPause.style.background = "red";
        playPause.style.fontSize = "17px";
        playPause.innerHTML = "Paused"
        text.innerHTML = "Click to Play";
        return hiddenHeartBeat();
      }
   }
   else if(circle1.style.animationPlayState = 'paused'){
      circle1.style.animationPlayState = 'running'
     playPause.style.background = "#4287f5";
     playPause.style.fontSize = "revert";
     playPause.innerHTML = "Played";
     text.innerHTML = " ";
     return hiddenHeartBeat()
   }
})


function hiddenHeartBeat(){
  if (heartBeat.style.animationPlayState != 'paused'){
    if(heartBeat.style.animationPlayState = 'running'){
      heartBeat.style.animationPlayState = 'paused';
      heartBeat.style.display = "none";
      text.style.position = "absolute";
    }
  }
  else if(heartBeat.style.animationPlayState = 'paused'){
    heartBeat.style.display = "block";
    heartBeat.style.animationPlayState = 'running'
  }
}





