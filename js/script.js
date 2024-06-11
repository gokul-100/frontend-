const age1=15;
const res=age1>=18?"eligible":"not eligible";
console.log(res);

function welcome(name){
    const result=name?name:"No name";
    console.log("welcome "+result);
}
welcome();
welcome("gokul");
welcome(null);
