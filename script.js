let boot = document.head.innerHTML=`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">`

document.body.style.backgroundColor="#04C98A";

let h1=document.createElement('h1');
h1.setAttribute("id","title")
h1.innerText="Calculator"
h1.style.textAlign="center"

let p=document.createElement("p");
p.setAttribute("id","description")
p.innerText="I have created an calculator using only the DOM Manipulation"
p.style.textAlign="center"

let container=document.createElement("div")
container.className="Container col-12";
container.style.display="flex";
container.style.flexDirection=
container.style.justifyContent="center";
container.style.alignItems="center"
container.style.height="80vh"


let calculator=document.createElement("div")
calculator.className="calculator col-5";
calculator.style.height="100%";
calculator.style.backgroundColor="#000"

let display=document.createElement("div");
display.className="display"
display.style.height="40%"

let input=document.createElement("input");
input.setAttribute("id","result");
input.style.width="100%";
input.style.height="100%";
input.style.padding="10px";
input.style.backgroundColor="black";
input.style.color="#0FB483";
input.style.textAlign="end";
input.style.border="none"
input.style.outline="none"

let button = document.createElement("div")
calculator.className="btn col-3";
button.style.display="grid";
button.style.gridTemplateColumns='repeat(4, 1fr)';
button.style.gap="2px"
button.style.height="60%"

let btnIds = ['clear', 'add', 'subtract', 'del', '1', '2', '3', '*', '4', '5', '6', 'div', '7', '8', '9', 'Modulo', '0','equal', 'MC',"."]
let btnLbls=['clear', '+', '-', 'del', '1', '2', '3', '*', '4', '5', '6', '/', '7', '8', '9', '%', '0','=', 'MC',"."]


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

display.appendChild(input);
calculator.appendChild(display);
calculator.appendChild(button);

container.appendChild(calculator);
document.body.appendChild(h1);
document.body.appendChild(p);
document.body.appendChild(container);


function handleButtonClick(buttonContent){
    let inpt="";
    inpt+=buttonContent
    switch(inpt){
        case "del":
            input.value=input.value.slice(0,-1);
            break;
        case 'clear':
            input.value="";
            break;
        case "=":
            input.value=eval(input.value);
            break;    
        default:
            input.value+=buttonContent;    
    }
    
}
