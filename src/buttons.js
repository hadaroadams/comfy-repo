import { addToCart, decreaseItem, increaseItem, removeItem } from "./carts.js"
import { getElement } from "./elements.js"
import { productDisplay } from "./productDisplay.js"
import { btnPressed } from "./productsInputs.js"

console.log("heloo")

export function buttons(){
    let btn = document.querySelectorAll('button')
    let menu = getElement('.navBackground')

    btn.forEach(async(item)=>{
        console.log(item.id)
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
                case 'cartItem':
                    addToCart(e)
                    showCart()
                break;
                case 'removeItem':
                   removeItem(e);
                break;
                case 'increase':
                    increaseItem(e);
                break;
                case 'decrease':
                    decreaseItem(e);
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
    console.log(slider)
}
function closeCart(){
    slider.classList.add('cartSliderOut');
    slider.classList.remove('cartSliderIn');
    setTimeout(()=>{
        slider.classList.add('clear');
    },500)                   
    console.log(slider)
}