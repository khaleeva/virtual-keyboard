import './index.html';
import './style.scss';
import {macKeyboardRU} from "./js/keyboard-ru";
import {Buttons} from "./js/Buttons";

window.onload = function () {
    renderButtonsToDom()
}


const renderButtonsToDom = () => {
    const keyboard = document.querySelector('.keyboard')
    generateButton(macKeyboardRU).forEach(btn => {
        keyboard.append(btn.generateButtons())
    })
}

const generateButton = (data) => {
    let buttons = [];
    data.forEach(btn => {
        buttons.push(new Buttons(btn))
    });
    return buttons;
}


// const typeText = () => {
//     let text = this.getCurrentButton()
//     console.log(text)
//     const textArea = document.querySelector('textarea');
//
// }
//
//
// typeText()
