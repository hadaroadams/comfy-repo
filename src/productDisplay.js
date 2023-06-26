import { buttons } from "./buttons.js";
import { getElement } from "./elements.js";
import { productArray } from "./fetchAPI.js";
import { filterAPi } from "./filter.js";

let product = getElement(".products")
let items =await filterAPi()
export async function productDisplay(selections){
    //let data = await filterAPi()
    product.innerHTML=`<div class="loader">
                        <img src="../../assert/Loading_icon.gif" alt="">
                        </div>
                    `
    if(selections){
        console.log(selections)
        let data = selections
        product.innerHTML=''
            data.map((item)=>{
                    let article = document.createElement('article')
                    let content = `
                            <div class="productImg">
                                <img src=${item.image} alt="">
                                <div class="productButtons">
                                    <a href=""><button class="search"><i class="fa-solid fa-magnifying-glass"></i></button></a>
                                    <button id="cartItem"><i class="fa-solid fa-cart-shopping"></i></button>
                                </div>
                            </div>
                            <p>${item.title}</p>
                            <h3>${item.price}</h3>
                    `
                    article.innerHTML = content
                    product.appendChild(article)
            })
    }else{
        product.innerHTML=""
            items.map((item)=>{
                    let article = document.createElement('article')
                    let content = `
                            <div class="productImg">
                                <img src=${item.image} alt="">
                                <div class="productButtons">
                                    <a href=""><button class="search"><i class="fa-solid fa-magnifying-glass"></i></button></a>
                                    <button id="cartItem"><i class="fa-solid fa-cart-shopping"></i></button>
                                </div>
                            </div>
                            <p>${item.title}</p>
                            <h3>$${item.price}</h3>
                    `
                    article.innerHTML=content
                    product.appendChild(article)
            })
    }
    console.log(document.querySelectorAll('button'))
    buttons()
}