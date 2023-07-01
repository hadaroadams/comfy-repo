import { buttons } from "../../src/buttons.js";
import { productsDetailsDipslay } from "../../src/productDetailDisplay.js";

let params = new URLSearchParams(window.location.search)
console.log("hello",params.get('id'))
productsDetailsDipslay(params.get('id'))
buttons()