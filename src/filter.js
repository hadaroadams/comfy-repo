import { fetctApi } from "./fetchAPI.js";

export async function filterAPi(){
    let respons = await fetctApi()
    let list = []
     respons.map((item)=>{
        const {id, fields } = item
        const {image,name,price } = fields
        const productItme = {
            id:id,
            image:image[0].url,
            title:name,
            price:price
        }
        list.push(productItme)
     })
    return list
}