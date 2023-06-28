import { fetctApi, productArray } from "./fetchAPI.js";
import { homeDisplay } from "./homeDisplay.js";
console.log("1")

await fetctApi()
// window.addEventListener('load',async()=>{
// })

export function filterAPi(){
    let respons = productArray
    //console.log(productArray)
    let list = []
    respons.map((item)=>{
        const {id, fields } = item
        const {image,name,price,company } = fields
        const productItme = {
            id:id,
            image:image[0].url,
            title:name,
            price:price/100,
            company:company,
        }
        list.push(productItme)

     })
     
    return list
}