
function add(){
    var x=document.getElementById("text1").value
    var y=document.getElementById("text2").value
    
    var a=parseInt(x)+parseInt(y)
    document.getElementById("text3").value=a

}
function sub(){

    let x=document.getElementById("text1").value
    let y=document.getElementById("text2").value
    let b=x-y
    document.getElementById("text4").value=b
}
function mul(){
    let x=document.getElementById("text1").value
    let y=document.getElementById("text2").value
    let d=x*y
    document.getElementById("text5").value=d
}
function div(){

    let x=document.getElementById("text1").value
    let y=document.getElementById("text2").value
    let e=parseInt(x)/parseInt(y)
    document.getElementById("text6").value=e
}