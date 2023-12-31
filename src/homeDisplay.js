import { getElement } from "./elements.js";
import { buttons } from "./buttons.js";
import { fetctApi } from "./fetchAPI.js";
import { filterAPi } from "./filter.js";


export  async function homeDisplay(){
let productArea = getElement('.productContainer')
        console.log(productArea)
        await fetctApi()
        let data = filterAPi()
        data.map((item , num)=>{
            if(num<=2){
                console.log(num)
                let article = document.createElement('article')
                article.setAttribute('id',`${item.id}`)
                let content = `
                        <div class="productImg">
                            <img src=${item.image} alt="">
                            <div class="productButtons">
                                <a href="./pages/productDetails/productsDetails.html?id=${item.id}" ><i class="fa-solid fa-magnifying-glass"></i></a>
                                <button id ='cartItem'><i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                        <p>${item.title}</p>
                        <h3>GHC ${item.price}</h3>
                `
                article.innerHTML=content
                productArea.appendChild(article)
            }
        })
    buttons()
}