import { buttons } from "./buttons.js"
import { getElement } from "./elements.js"
import { fetctApi } from "./fetchAPI.js"
import { filterAPi } from "./filter.js"


let cartContainer = getElement('.itemContainer')
let price = getElement('.cartPrice')
let num = 0
let num2 = 0
let allitems=[]
let numOfItem= getElement('.cartNum')

await fetctApi()

let cartProduct = filterAPi()

export function addToCart(item){
    let element = item.currentTarget.parentElement.parentElement.parentElement
    // WHY DOES THE PARENTELEMENT I AM TRYING TO TARGET KEEP CHANGING BETWEEN element1 and element2
    //answer found
    let boolean1 =allitems.some((item)=>{
        return item.id == element.id  
    })
    console.log(boolean1)
    console.log(element)
    
        cartProduct.filter((item)=>{
            if(item.id==element.id ){
                
                if(boolean1){
                    let article=getElement(`#${item.id}`)
                    let itemNumber= article.querySelector('.numPro')
                    item.productsInCart++
                    itemNumber.innerHTML=item.productsInCart
                    console.log(item.productsInCart,itemNumber)
                    num = num+item.price
                    allitems.length++
                    num2++
                    numOfItem.innerHTML=num2
                    price.innerHTML=`$${num.toFixed(2)}`
                }else{
                    console.log(item)
                    allitems.push(item)
                    num2++
                    numOfItem.innerHTML=num2
                    cartDisplay(item)
                }
            }
        })
        buttons()
}
    


function cartDisplay(item){
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
                        <h5 class="numPro">1</h5>
                        <button id='decrease'><i class="fa-solid fa-angle-down"></i></button>
                    </div>`
                num = num +item.price
                price.innerHTML=`$${num.toFixed(2)}`
            cartContainer.appendChild(article)
}

export function removeItem(element){
    let article = element
    console.log(element)
    article.remove()
    let id = article.id
    allitems = allitems.filter((item)=>{
        if(item.id!==id){
            return item
        }  
    })
    cartProduct.filter((item)=>{
        if(item.id==id){
            num = num-(item.price*item.productsInCart)
            console.log(allitems)
            price.innerHTML=`$${Math.abs(num.toFixed(2))}`
            num2 = num2-item.productsInCart
            numOfItem.innerHTML=num2
            item.productsInCart=1
        }
    })
    console.log(cartProduct)
}

export function increOrDecre(element){
    let article = element.currentTarget.parentElement.parentElement
    //let removal = article.querySelector('#removeItem')
    let numOfProducts = article.querySelector('.numPro')
    if(element.currentTarget.id=="increase"){
        cartProduct.filter((item)=>{
            if(item.id==article.id){
                item.productsInCart++;
                numOfProducts.innerHTML=item.productsInCart;
                num=num+item.price
                price.innerHTML=`$${num.toFixed(2)}`
                num2++
                numOfItem.innerHTML=num2
            }
        })
    }else{
        cartProduct.filter((item)=>{
            if(item.id==article.id){
                if(item.productsInCart<=1){
                    //console.log(removal)
                    removeItem(article)
                }else{
                    item.productsInCart--;
                    numOfProducts.innerHTML=item.productsInCart;
                    num=num-item.price
                    price.innerHTML=`$${num.toFixed(2)}`
                    num2--
                    numOfItem.innerHTML=num2
                }
            }
        })
    }
    // let item 
    // item++
    // article.innerHTML = item
}
export function decreaseItem(element){
    let article = element.target.parentElement.previousElementSibling
    console.log(article)

}