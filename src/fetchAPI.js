const url = 'https://course-api.com/javascript-store-products'

export async function fetctApi(){
    try{
        const data = await fetch(url)
        const respon = await data.json()
        return respon
    }catch(error){
        console.log(error)
    }
}