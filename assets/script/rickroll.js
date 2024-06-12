//console.log("crack");
let sex = false;
function rickie() {
    //console.log("rickie");
    rick.style = "display: revert";
    rick.play();
    rick.requestFullscreen();
    rick.muted = false;
    sex = true;
}
document.onfullscreenchange = function(a) {
    if (!document.fullscreenElement) {
        //console.log("WAAAAAAAAAHHHHHHH")
        rick.pause();
        rick.currentTime = 0
        rick.style = "";
    }            
}