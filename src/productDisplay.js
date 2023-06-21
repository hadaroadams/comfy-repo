import { getElement } from "./elements.js";
import { productArray } from "./fetchAPI.js";
import { filterAPi } from "./filter.js";

let product = getElement(".products")

export async function productDisplay(selections){
    //let data = await filterAPi()
    product.innerHTML=""
    if(selections){
        console.log(selections)
        let data = selections
            data.map((item , num)=>{
                    let article = document.createElement('article')
                    let content = `
                            <div class="productImg">
                                <img src=${item.image} alt="">
                                <div class="productButtons">
                                    <a href=""><button><i class="fa-solid fa-magnifying-glass"></i></button></a>
                                    <button><i class="fa-solid fa-cart-shopping"></i></button>
                                </div>
                            </div>
                            <p>${item.title}</p>
                            <h3>${item.price}</h3>
                    `
                    article.innerHTML=content
                    product.appendChild(article)
            })
    }else{
        let data = await filterAPi()
            data.map((item , num)=>{
                    let article = document.createElement('article')
                    let content = `
                            <div class="productImg">
                                <img src=${item.image} alt="">
                                <div class="productButtons">
                                    <a href=""><button><i class="fa-solid fa-magnifying-glass"></i></button></a>
                                    <button><i class="fa-solid fa-cart-shopping"></i></button>
                                </div>
                            </div>
                            <p>${item.title}</p>
                            <h3>${item.price}</h3>
                    `
                    article.innerHTML=content
                    product.appendChild(article)
            })
    }
    
}