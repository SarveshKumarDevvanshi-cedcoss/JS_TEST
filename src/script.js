function submitBtn(){
    var name=document.getElementById("name");
    var num=document.getElementById("num");
    if(validate(name, num)){
        document.getElementById("name").style.borderColor="black";
        document.getElementById("num").style.borderColor="black";
        document.getElementById("nameerr").style.display="none";
        document.getElementById("noerr").style.display="none";
        alert("Added Successfully");
    }
}
function validate(name, num){
    var fl=true;
    console.log(typeof(num.value));
    var nerr=document.getElementById("nameerr");
    var numerr=document.getElementById("noerr");
    if(name.value.length == 0){
        name.style.borderColor="red";
        nerr.style.color="red";
        nerr.innerHTML="*Name field is empty.";
        fl=false;
    }
    if(/[0-9]/.test(name.value)){
        name.style.borderColor="red";
        nerr.style.color="red";
        nerr.innerHTML="*Name field should be String.";
        fl=false;
    }
    if(!(/^-?\d+$/.test(num.value))){
        num.style.borderColor="red";
        numerr.style.color="red";
        numerr.innerHTML="*Number field is Integer.";
        fl=false;
    }
    if( num.value.length > 10 || num.value.length < 10){
        num.style.borderColor="red";
        numerr.style.color="red";
        numerr.innerHTML="*Number field should be 10 digit only.";
        fl=false;
    }
    // else if(num.value.length ==0){
    //     num.style.borderColor="red";
    //     numerr.style.color="red";
    //     numerr.innerHTML="*Number field is empty.";
    //     fl=false;
    // }
    return fl;
}