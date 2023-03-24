function checkState(){

    var list = document.getElementById('list');
    
    if(list.options [list.selectedIndex].value == 'on'){
    
    document.getElementById('lamp2').src = 'photo/on.jpg';}
    else{
    
    document.getElementById('lamp2').src = 'photo/on.jpg';
    }
}  

function stopvideo(){
    document.getElementById('video').pause()
    document.getElementById('video').currentTime = 0;
  }

  function playvideo(){
    document.getElementById("video").play();
  }
  function pausevideo(){
    document.getElementById("video").pause();
  }

// document.getElementById("video").play();
// document.getElementById("video").pause()pas;
// document.getElementById("video").stop();
