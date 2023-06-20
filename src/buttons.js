import { getElement } from "./elements.js"


export function buttons(){
    let btn = document.querySelectorAll('button')
    let menu = getElement('.navBackground')
    let slider = getElement('#cartSlider')
    console.log(slider)
    btn.forEach(item=>{
        item.onclick=()=>{
            switch(item.id || item.className){
                case 'menu':
                    menu.classList.remove('clear');
                break;
                case 'close':
                    menu.classList.add('clear');
                break;
                case 'closeCart':
                    slider.classList.add('cartSliderOut');
                    slider.classList.remove('cartSliderIn');
                    setTimeout(()=>{
                        slider.classList.add('clear');
                    },500)                   
                    console.log(slider)
                break ;
                case 'cart':
                    slider.classList.remove('cartSliderOut')
                    slider.classList.add('cartSliderIn');
                    slider.classList.remove('clear');
                    console.log(slider)
                break;
            }
        }
    })
}
