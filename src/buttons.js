import { getElement } from "./elements.js"


export function buttons(){
    let btn = document.querySelectorAll('button')
    let menu =getElement('.showUp')
    btn.forEach(item=>{
        item.onclick=()=>{
            switch(item.id){
                case 'menu':
                    menu.classList.remove('clear');
                break;
                case 'close':
                    menu.classList.add('clear');
            }
        }
    })
}
