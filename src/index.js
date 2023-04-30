import './index.html';
import './style.scss';
import {macKeyboardRU} from "./js/keyboard-ru";
import {Buttons} from "./js/Buttons";



window.onload = function () {
    renderButtonsToDom()

}

const textArea = document.querySelector('textarea');
const renderButtonsToDom = () => {
    const keyboard = document.querySelector('.keyboard')
    generateButton(macKeyboardRU).forEach(btn => {
        keyboard.append(btn.generateButtons())
    })
}

const generateButton = (data) => {

    let buttons = [];
    data.forEach(btn => {
        buttons.push(new Buttons(textArea, btn))
    });
    return buttons;
}


