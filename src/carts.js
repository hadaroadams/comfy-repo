import { getElement } from "./elements.js"
import { filterAPi } from "./filter.js"

let cartContainer = getElement('.itemContainer')
let price = getElement('.cartPrice')
let numOfItem= getElement('.cart::before')
let num = 0
let allitems=[]
export function addToCart(item){
    let numOfItem= getElement('.cartNum')
    console.log(numOfItem)
    let element = item.target.parentElement.parentElement.parentElement.parentElement

    let cartProduct = filterAPi()
    console.log(cartProduct)
    cartProduct.filter((item)=>{
        if(item.id==element.id){
            allitems.push(item)
            console.log(allitems.length)
            numOfItem.innerHTML= allitems.length
            console.log(allitems)
            let article = document.createElement('article')
            article.innerHTML=`<img src="${item.image}" alt="">
                    <div class="productDetails">
                        <h5>${item.title}</h5>
                        <p>$${item.price}</p>
                        <button>remove</button>
                    </div>
                    <div class="productBtns">
                        <button><i class="fa-solid fa-angle-up"></i></button>
                        <h5>1</h5>
                        <button><i class="fa-solid fa-angle-down"></i></button>
                    </div>`
                num = num +item.price
                console.log(price,num)
                price.innerHTML=`$${num.toFixed(2)}`
            cartContainer.appendChild(article)
        }
    })
    
}
