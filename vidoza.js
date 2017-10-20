function playVideo() {
  if(document.getElementsByClassName("jw-video jw-reset").length > 0) {
    document.getElementsByClassName("jw-video jw-reset")[0].play();
    setTimeout(playVideo,5000);
  } else {
    setTimeout(playVideo,5000);
  }
}
playVideo();
