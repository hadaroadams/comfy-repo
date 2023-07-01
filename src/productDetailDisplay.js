import { buttons } from "./buttons.js"
import { getElement } from "./elements.js"

let url='https://course-api.com/javascript-store-single-product'
let main = getElement('main')
let headName= getElement('.name')
export async function singFetch(id){
    try{
        let data = await fetch(`${url}/?id=${id}`)
            data = await data.json()
        return data
    }catch(error){
        console.log(error)
    }
}

export async function productsDetailsDipslay(id){
        let data = await singFetch(id)

        console.log(data)
        const{colors,company,description,image,price,name} = data.fields
        headName.innerHTML=`Home / ${name.replace(/^(.)|\s(.)/g, ($1) => $1.toUpperCase())}`;
        let article = document.createElement('article')
        article.innerHTML=`
                         <div class="imageDiv">
                <img src="${image[0].url}" alt="" id="proImg">
            </div>
            <div class="detailsDiv">
                <h1>${name.replace(/^(.)|\s(.)/g, ($1) => $1.toUpperCase())}</h1>
                <h2>${company.toUpperCase()}</h2>
                <p class="priceP">GHC ${price/10}</p>
                <div class="productColor">
                    <div class="color1" style="background-Color:${colors[0]};"></div>
                    <div class="color2" style="background-Color:${colors[1]};"></div>
                </div>
                
                <p class="content">${description}</p>
                <button id="singlAddToCart" data-id="${id}">ADD TO CART</button>
            </div>
        `
        main.appendChild(article)
        console.log(main)

        buttons()
}