import { buttons } from "../../src/buttons.js";
import { productDisplay } from "../../src/productDisplay.js";
import { getElement } from "../../src/elements.js";
import { fetctApi } from "../../src/fetchAPI.js";
import { btnPressed } from "../../src/productsInputs.js";

let priceRange = getElement('#range')
let price = getElement('.priceNum')
let textArea = getElement('#text')
console.log(priceRange)
window.addEventListener('DOMContentLoaded',fetctApi)

buttons()

priceRange.addEventListener("input",(e)=>{
    let num= e.target.value
    price.innerText=`${num}`
    btnPressed(null,num)
    
})
textArea.addEventListener('input',(e)=>{
    let text = e.target.value.toLowerCase()
    btnPressed(null,null,text)
})

productDisplay()
