import { buttons } from "./buttons.js"

const url = 'https://course-api.com/javascript-store-products'

export let productArray = []

export async function fetctApi(){
    try{
        const data = await fetch(url)
        const respon = await data.json()
        productArray = []
        respon.map((item)=>{
            productArray.push(item)
        })
        console.log(respon)
        return respon
    }catch(error){
        console.log(error)
    }
}