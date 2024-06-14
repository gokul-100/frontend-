let im1:string="./src/images/sundarpichai.webp";
let im2:string="./src/images/satyanadella.jpg";
let Src:any=document.getElementById("img1") as HTMLImageElement;
let imname:any=document.getElementById("imgNmae") as HTMLImageElement ;

function toggleImage(){
    if(Src.src===im1){
        Src.src=im2;
        imname.innerHTML="Satya Nadella";

    }
    else{
        Src.src=im1;
        imname.innerHTML="Sundar Pichai";
    }
}