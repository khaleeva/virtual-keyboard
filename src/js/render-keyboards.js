import {macKeyboardRU} from "./keyboard-ru";

export const RenderKeyboard = () => {

    const keyboard = document.querySelector('.keyboard')

    macKeyboardRU.map((keyboards, index) => {
        keyboard.innerHTML += `<div class="row row_${index}">${keyboards.map((key, index) =>
            `<button class="button" data-width=${key.width}>${key.key}</button>`).join("")}</div>`
    })

    if(document.querySelectorAll('.button')){
        let btns = document.querySelectorAll('.button');
        btns.forEach(btn => {
            const width = btn.dataset.width;
            btn.style.width = `${width * 60}px`;
        })
    }

}
