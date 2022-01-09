//function that display value

function dis(val)

{

    document.getElementById("result").value+=val

}


//function that evaluates the digit and return result

function solve()

{

    let x = document.getElementById("result").value

    let y = eval(x)

    document.getElementById("result").value = y
    


if (y== "7890"){
h = document.getElementById("bottom")
h.style.display="block"
}            
    
else{
alert("Incorrect-Password")
document.getElementById("result").value = ""

document.getElementById("a1").style.color="gray"
document.getElementById("a2").style.color="gray"
document.getElementById("a3").style.color="gray"
document.getElementById("a4").style.color="gray"
}        

}

function change(){
    
let m = document.getElementById("result").value

if(m <= 9){
n = document.getElementById("a1")
n.style.color="red"
}

else if ( m <= 99){
document.getElementById("a2").style.color="red"
}

else if ( m <= 999){
document.getElementById("a3").style.color="red"
}

else{
document.getElementById("a4").style.color="red"
}
    
    
}