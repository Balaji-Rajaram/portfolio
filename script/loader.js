$(document).ready(function(){
    $("#loadIcon").css("transform", "scale(1.2)"); // Fade in the element over 1 second (1000 milliseconds)
});

setTimeout(() => {
   document.getElementById("loading").style.display = "none"
   document.getElementById("bodyContent").hidden = false
   document.getElementById("bodyContent").classList.add("animate-fadeIn")

}, 3000);

