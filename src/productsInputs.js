import { buttons } from "./buttons.js";
import { getElement } from "./elements.js";
import { productArray } from "./fetchAPI.js";
import { filterAPi } from "./filter.js";
import { productDisplay } from "./productDisplay.js";
console.log('3')
export  function all(){
    productDisplay()
}
export  function btnPressed(company, num,title){
    let data = productArray
    console.log(data)
    let list=[]
    data.filter((item)=>{
        console.log(item)
        if(item.fields.company===company||item.fields.price<=num*10 ||item.fields.name.includes(title)) {
            console.log(1)
            const {id, fields } = item
            const {image,name,price,company } = fields
            const productItem = {
                id:id,
                image:image[0].url,
                title:name,
                price:price/10,
                company:company
            }
        list.push(productItem)
        }
    })
    productDisplay(list)
}

