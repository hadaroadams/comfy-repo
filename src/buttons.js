import { getElement } from "./elements.js"
import { productDisplay } from "./productDisplay.js"
import { btnPressed } from "./productsInputs.js"


export function buttons(){
    let btn = document.querySelectorAll('button')
    let menu = getElement('.navBackground')
    let slider = getElement('#cartSlider')
    console.log(slider)
    btn.forEach(async(item)=>{
        item.onclick=(e)=>{
            e.preventDefault()
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
                case 'all':
                    console.log('all');
                    productDisplay()
                break;
                case 'ikea':
                    
                    btnPressed("ikea")
                break;
                case 'marcos':
                    
                    btnPressed("marcos")
                break;
                case 'caressa':
                    btnPressed("caressa")
                break;
                case 'liddy':
                    btnPressed("liddy")
                break;
            }
        }
    })
}
