let addtobutton=document.getElementById("submit");
let addtocontainer=document.getElementById("store");
let input=document.getElementById("m");

addtobutton.addEventListener("click",function(){
    var para=document.createElement("li");
    para.classList.add("para-styling");
    para.innerText=input.value;
    addtocontainer.appendChild(para);
    input.value="";
    para.addEventListener("click",function(){
        para.style.textDecoration="line-through";
    
    })
    para.addEventListener("dblclick",function(){
        addtocontainer.removeChild(para);

    })

                                                
})