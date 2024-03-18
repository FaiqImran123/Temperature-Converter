
let result;
let flag;
let isCal;
document.getElementById("submit").onclick =function(){
    if (document.getElementById("cel").checked){
        result =(9/5) * Number(document.getElementById("inp").value) + 32;
        flag =" °F";
        isCal =true;
        
    }
    else if(document.getElementById("fer").checked){
        result =(5/9) * (Number(document.getElementById("inp").value) - 32);
        flag =" °C";
        isCal =true;


    }
    output =document.getElementById("result")
    if (result<=20){
        output.style.color ="blue";

    
    }
    else if(result>20 && result<=25){
        output.style.color ="lightblue";

    }
    else if(result>25 && result<=30){
        output.style.color ="tomato";

    }
    else{
        output.style.color ="red";
        
    }
    if(isCal==true){
    
    output.textContent =String(result) + flag
    }


}