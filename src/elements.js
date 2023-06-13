
export function getElement(selection){
    if(selection){
        let element =document.querySelector(selection)
        return element
    }else{
        throw 'No element selected'
    }
}