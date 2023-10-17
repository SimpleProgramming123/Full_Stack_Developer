let screen = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{

    button.addEventListener('mousedown',()=>{
        button.style.transform = 'scale(1.2)';
        button.style.backgroundColor ="rgb(84,84,84,0.9)";
      })
      button.addEventListener('mouseup',()=>{
        button.style.transform = 'scale(1)';
        button.style.backgroundColor ="transparent";
      })

    button.addEventListener('click',(e)=>{
    
        if(e.target.innerHTML == '='){
            string = eval(string);
            screen.value = string;
            button.style.backgroundColor ="orange";
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            screen.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            screen.value = string;
        }
        else{
            string += e.target.innerHTML;
            screen.value = string;
        }
    })
})