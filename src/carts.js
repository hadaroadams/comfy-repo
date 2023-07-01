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
    let elementId = item
    // WHY DOES THE PARENTELEMENT I AM TRYING TO TARGET KEEP CHANGING BETWEEN element1 and element2
    //answer found
    let boolean1 =Object.keys(localStorage).some((item)=>{
        return item == elementId  
    })
    console.log(boolean1)
    
        cartProduct.filter((item)=>{
            if(item.id==elementId ){
                
                if(boolean1){
                    let article=getElement(`#${item.id}`)
                    let itemNumber = article.querySelector('.numPro')
                    let local = localStorage.getItem(item.id)
                    let item2 = JSON.parse(local)
                    item2.productsInCart++
                    itemNumber.innerHTML=item2.productsInCart
                    console.log(item.productsInCart,itemNumber)
                    num = num+item2.price
                    allitems.length++
                    num2++
                    numOfItem.innerHTML=num2
                    price.innerHTML=`GHC ${num.toFixed(2)}`
                    localStorage.setItem(item2.id,JSON.stringify(item2))
                    
                }else{
                    console.log(item)
                    allitems.push(item)
                    num2++
                    numOfItem.innerHTML=num2
                    cartDisplay(item)
                    localStorage.setItem(item.id,JSON.stringify(item))
                    num = num +item.price
                    price.innerHTML=`GHC ${num.toFixed(2)}`
                }
            }
        })
        // console.log(Object.values(localStorage))
        // console.log(Object.values(JSON.parse(localStorage)))
        buttons()
}
    


function cartDisplay(item){
     let article = document.createElement('article')
            article.setAttribute("id",`${item.id}`)
            article.innerHTML=`<img src="${item.image}" alt="">
                    <div class="productDetails">
                        <h5>${item.title}</h5>
                        <p>GHC${item.price}</p>
                        <button id="removeItem">remove</button>
                    </div>
                    <div class="productBtns">
                        <button id='increase'><i class="fa-solid fa-angle-up"></i></button>
                        <h5 class="numPro">${item.productsInCart}</h5>
                        <button id='decrease'><i class="fa-solid fa-angle-down"></i></button>
                    </div>`
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
            let localItem =JSON.parse(localStorage.getItem(item.id))
            num = num-(item.price*(localItem.productsInCart))
            console.log(allitems)
            price.innerHTML=`GHC${Math.abs(num.toFixed(2))}`
            item.productsInCart=1
            num2 = num2-(item.productsInCart + localItem.productsInCart-1)
            localStorage.removeItem(item.id)
            numOfItem.innerHTML=num2
        }
    })
    console.log(cartProduct)
}

export function increOrDecre(element){
    let article = element.currentTarget.parentElement.parentElement
    //let removal = article.querySelector('#removeItem')
    let numOfProducts = article.querySelector('.numPro')
        let convertedData = Object.values(localStorage)
    if(element.currentTarget.id=="increase"){
        convertedData.filter((item)=>{
            let newItem = JSON.parse(item)
            if(newItem.id==article.id){
                newItem.productsInCart++;
                numOfProducts.innerHTML=newItem.productsInCart;
                num=num+newItem.price
                price.innerHTML=`GHC ${num.toFixed(2)}`
                num2++
                numOfItem.innerHTML=num2
                
                localStorage.setItem(newItem.id,JSON.stringify(newItem))
            }
        })
    }else{
        console.log("hello")
        console.log(convertedData)
        convertedData.filter((item)=>{
            let newItem= JSON.parse(item)
            if(newItem.id==article.id){
                if(newItem.productsInCart<=1){
                    //console.log(removal)
                    removeItem(article)
                }else{
                    newItem.productsInCart--;
                    numOfProducts.innerHTML=newItem.productsInCart;
                    num=num-newItem.price
                    price.innerHTML=`GHC ${num.toFixed(2)}`
                    num2--
                    numOfItem.innerHTML=num2
                    localStorage.setItem(newItem.id,JSON.stringify(newItem))
                }
            }
        })
    }
    // let item 
    // item++
    // article.innerHTML = item
}

export function loadshow(){
    let convertedData = Object.values(localStorage)
    console.log(localStorage)
    convertedData.map((item)=>{
        console.log(item)
        let freshData = JSON.parse(item)
        num2 = num2+freshData.productsInCart
        num = num+(freshData.price*freshData.productsInCart)
        price.innerHTML=`GHC ${num.toFixed(2)}`
        console.log(num,price)
        numOfItem.innerHTML=num2
        cartDisplay(freshData)
    })
}

loadshow()