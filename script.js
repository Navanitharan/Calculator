let boot = document.head.innerHTML=`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">`

document.body.style.backgroundColor="#04C98A";

let container=document.createElement("div")
container.className="Container col-12";
container.style.display="flex";
container.style.justifyContent="center";
container.style.alignItems="center"
container.style.height="100vh"


let calculator=document.createElement("div")
calculator.className="calculator col-5";
calculator.style.height="70%";
calculator.style.backgroundColor="#000"

let display=document.createElement("div");
display.className="display"
display.style.height="40%"
display.style.color="#0FB483";
display.style.textAlign="end"
display.style.fontSize="20px"
display.style.paddingTop="50px"

let button = document.createElement("div")
calculator.className="btn col-3";
button.style.display="grid";
button.style.gridTemplateColumns='repeat(4, 1fr)';
button.style.gap="2px"
button.style.height="60%"

let btnIds = ['c', '+', '-', 'del', '1', '2', '3', '*', '4', '5', '6', '/', '7', '8', '9', '%', '0','=', 'MC',"."]
let btnLbls=['c', '+', '-', 'del', '1', '2', '3', '*', '4', '5', '6', '/', '7', '8', '9', '%', '0','=', 'MC',"."]


for(let i=0;i<btnIds.length;i++){
    let btn = document.createElement("button");
    btn.type="button";
    btn.id=btnIds[i];
    btn.textContent=btnLbls[i];
    btn.className="butn"
    btn.style.height="100%";
    btn.style.borderRadius="5px"
    btn.style.color="#0FB480"
    btn.style.backgroundColor="#0B0D0C"
    btn.style.border="none";
    btn.style.outline="none"
    btn.addEventListener("mouseover",function(){
        btn.style.backgroundColor="#04C98A";
        btn.style.color="#0B0D0C"
    });
    btn.addEventListener("mouseout",function(){
        btn.style.backgroundColor="#0B0D0C";
        btn.style.color="#04C98A";
    })
    btn.addEventListener("click",function(){
        handleButtonClick(this.innerText)
    })
    button.appendChild(btn);
}

document.addEventListener('keypress',function(event){
    let pressedKey = event.key;
    console.log(pressedKey);
    let correspondingButton = document.getElementById(pressedKey);
    console.log(correspondingButton)
    if(correspondingButton){
    handleButtonClick(pressedKey)
    }
})

calculator.appendChild(display);
calculator.appendChild(button);

container.appendChild(calculator);

document.body.appendChild(container);


function handleButtonClick(buttonContent){
    let inpt="";
    inpt+=buttonContent
    switch(inpt){
        case "del":
            display.innerText=display.innerText.slice(0,-1);
            break;
        case 'c':
            display.innerText="";
            break;
        case "=":
            display.innerText=eval(display.innerText);
            break; 
        case "MC":
            break;   
        default:
            display.innerText+=buttonContent;    
    }
    
}
