import { buttons } from "./src/buttons.js";
import { getElement } from "./src/elements.js";
import { fetctApi } from "./src/fetchAPI.js";
import { filterAPi } from "./src/filter.js";
import { homeDisplay } from "./src/homeDisplay.js";

let menu = getElement('.menu')

buttons()
window.addEventListener('load',async()=>{
    await homeDisplay()
})