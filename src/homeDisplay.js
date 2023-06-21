import { getElement } from "./elements.js";
import { fetctApi } from "./fetchAPI.js";
import { filterAPi } from "./filter.js";

let productArea = getElement('.productContainer')

export async function homeDisplay(){
        productArea.innerHTML=`<div class="loader">
                <img src="./assert/Loading_icon.gif" alt="">
            </div>`
        let data = await filterAPi()
        productArea.innerHTML=""
        data.map((item , num)=>{
            if(num<=2){
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
                productArea.appendChild(article)
            }
        })
    
}