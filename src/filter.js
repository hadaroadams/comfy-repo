import { fetctApi } from "./fetchAPI.js";

export async function filterAPi(){
    let respons = await fetctApi()
    console.log(respons)
    let list = []
    respons.map((item)=>{
        const {id, fields } = item
        const {image,name,price,company } = fields
        const productItme = {
            id:id,
            image:image[0].url,
            title:name,
            price:price,
            company:company
        }
        list.push(productItme)

     })
    return list
}