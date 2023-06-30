import { addToCart, increOrDecre, removeItem } from "./carts.js"
import { getElement } from "./elements.js"
import { productDisplay } from "./productDisplay.js"
import { btnPressed } from "./productsInputs.js"


export function buttons(){
    let btn = document.querySelectorAll('button')
    let menu = getElement('.navBackground')

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
                    closeCart()
                break ;
                case 'cart':
                    showCart()
                break;
                case 'all':
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
                case 'cartItem':
                    addToCart(e)
                    showCart()
                break;
                case 'removeItem':
                   removeItem(e.currentTarget.parentElement.parentElement);
                break;
                case 'increase':
                    increOrDecre(e);
                break;
                case 'decrease':
                    increOrDecre(e);
                break;
            }
        }
    })
}
let slider = getElement('#cartSlider')
function showCart(){
    slider.classList.remove('cartSliderOut')
    slider.classList.add('cartSliderIn');
    slider.classList.remove('clear');
    
}
function closeCart(){
    slider.classList.add('cartSliderOut');
    slider.classList.remove('cartSliderIn');
    setTimeout(()=>{
        slider.classList.add('clear');
    },500)                   
}