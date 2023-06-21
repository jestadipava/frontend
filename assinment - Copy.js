function pri(){
    var x=document.getElementById("text1").value
    var y=document.getElementById("text2").value



    if(x&&y){
     alert("succefully submited");
    }

    else if(x) {
    alert (" enter email");
    }
    else{
    alert("enter name");
    }
}