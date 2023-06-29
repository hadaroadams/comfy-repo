import { buttons } from "./buttons.js"
import { getElement } from "./elements.js"
import { filterAPi } from "./filter.js"

let cartContainer = getElement('.itemContainer')
let price = getElement('.cartPrice')
let num = 0
let numOfProduct=0
let allitems=[]
let numOfItem= getElement('.cartNum')
export function addToCart(item){
    console.log(numOfItem)
    let element1 = item.target.parentNode.parentElement.parentElement.parentElement
    let element2 = item.target.parentNode.parentElement.parentElement
    // WHY DOES THE PARENTELEMENT I AM TRYING TO TARGET KEEP CHANGING BETWEEN element1 and element2
    console.log(element1)
    let cartProduct = filterAPi()
    console.log(cartProduct)
    cartProduct.filter((item)=>{
        if(item.id==element1.id||item.id==element2.id ){
            allitems.push(item)
            console.log(allitems.length)
            numOfItem.innerHTML= allitems.length
            console.log(allitems)
            let article = document.createElement('article')
            article.setAttribute("id",`${item.id}`)
            article.innerHTML=`<img src="${item.image}" alt="">
                    <div class="productDetails">
                        <h5>${item.title}</h5>
                        <p>$${item.price}</p>
                        <button id="removeItem">remove</button>
                    </div>
                    <div class="productBtns">
                        <button id='increase'><i class="fa-solid fa-angle-up"></i></button>
                        <h5 class="">1</h5>
                        <button id='decrease'><i class="fa-solid fa-angle-down"></i></button>
                    </div>`
                num = num +item.price
                console.log(price,num)
                price.innerHTML=`$${num.toFixed(2)}`
            cartContainer.appendChild(article)
        }
    })
    buttons()
}

export function removeItem(element){
    let article = element.target.parentElement.parentElement
    article.remove()
    let id = article.id
    allitems = allitems.filter((item)=>{
        if(item.id!==id){
            return item
        }
        num=num-item.price
        price.innerHTML=`$${num.toFixed(2)}`
    })
    console.log(allitems)
    numOfItem.innerHTML=allitems.length
}

export function increaseItem(element){
    let article = element.target.parentElement.nextElementSibling
    let item 
    item++
    article.innerHTML = item
}
export function decreaseItem(element){
    let article = element.target.parentElement.previousElementSibling
    console.log(article)

}