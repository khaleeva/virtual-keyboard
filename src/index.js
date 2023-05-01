import './index.html';
import './style.scss';
import {macKeyboardRU} from "./js/keyboard-ru";
import {Buttons} from "./js/Buttons";



window.onload = function () {
    const container = document.createElement('div')
    container.classList.add('container')
    const h1 = document.createElement('h1')
    h1.innerText = 'Virtual Keyboard';
    const textarea = document.createElement('textarea');
    const keyboard = document.createElement('div')
    keyboard.classList.add('keyboard')
    textarea.rows = '10';
    container.append(h1)
    container.append(textarea)
    container.append(keyboard)
    document.querySelector('body').append(container)
    renderButtonsToDom()


}


const renderButtonsToDom = () => {

    const keyboard = document.querySelector('.keyboard')
    generateButton(macKeyboardRU).forEach(btn => {
        keyboard.append(btn.generateButtons())
    })
}

const generateButton = (data) => {
    const textArea = document.querySelector('textarea');
    let buttons = [];
    data.forEach(btn => {
        buttons.push(new Buttons(textArea, btn))
    });
    return buttons;
}


