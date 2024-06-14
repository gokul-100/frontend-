let img1:string="./src/images/sundarpichai.webp";
let img2:string="./src/images/satyanadella.jpg";
let src:any=document.getElementById("img1") as HTMLImageElement;
let imgname:any=document.getElementById("imgNmae") as HTMLImageElement ;

function toggleImage(){
    if(src.src===img1){
        src.src=img2;
        imgname.innerHTML="Satya Nadella";

    }
    else{
        src.src=img1;
        imgname.innerHTML="Sundar Pichai";
    }
}