var im1 = "./src/images/sundarpichai.webp";
var im2 = "./src/images/satyanadella.jpg";
var Src = document.getElementById("img1");
var imname = document.getElementById("imgNmae");
function toggleImage() {
    if (Src.src === im1) {
        Src.src = im2;
        imname.innerHTML = "Satya Nadella";
    }
    else {
        Src.src = im1;
        imname.innerHTML = "Sundar Pichai";
    }
}
