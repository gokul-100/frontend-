function checkdata(){
    // window.alert("hi");
    let uid=document.getElementById("userid").value;
    let up=document.getElementById("pass").value;
    if(uid.trim()===""){
        document.getElementById("uiderror").innerHTML="UserId is required!"
    }
    else{
        document.getElementById("uiderror").innerHTML="";
    }
    if(up.trim()===""){
         document.getElementById("uperror").innerHTML="User pass is required!"
    }
    else if(!up.trim().match('[a-zA-z]{3-20}$') | !up.trim().match('[0-9]{3-20}$')){
         document.getElementById("uperror").innerHTML="enter strong password";
         document.getElementById("uperror").style.color="red";
    }

}