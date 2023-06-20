import { getElement } from "./elements.js";
import { filterAPi } from "./filter.js";

let product = getElement(".products")

export async function productDisplay(){
    let data = await filterAPi()
        data.map((item , num)=>{
                console.log(num)
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