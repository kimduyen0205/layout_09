var images = ["Capture1.PNG","Capture2.PNG","Capture3.PNG"];
var BtnPre = document.getElementById("BtnPre");
var BtnNext = document.getElementById("BtnNext");
BtnPre.onclick = function() {
    PrevImage();
}
BtnNext.onclick = function () {
    NextImage();
}
function PrevImage() {
    var img = document.getElementById("slideimage");
    var imgname = img.name.split("_");
    var index = imgname[1]; //index = 0
    if (index == 0) {
        index = images.length - 1;
    }else{
        index--;
    }
    img.src = "images/slide/" + images[index];
    img.name = "image_" + index;
}
function NextImage() {
    var img = document.getElementById("slideimage");
    var imgname = img.name.split("_");
    var index = imgname[1]; //index = 0
    if(index == images.length - 1){
        index = 0;
    }else{
        index++;
    }
    img.src = "images/slide/" + images[index];
    img.name = "image_" + index;
}