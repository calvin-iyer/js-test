function playVideo() {
  if(document.getElementsByClassName("jw-video jw-reset").length > 0) {
    document.getElementsByClassName("jw-video jw-reset")[0].play();
  } else {
    setTimeout(playVideo,5000);
  }
}
setTimeout(playVideo,5000);
