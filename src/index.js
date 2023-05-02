import './index.html';
import './style.scss';
import {macKeyboardRU} from "./js/keyboard-ru";
import {Buttons} from "./js/Buttons";



window.onload = function () {
    generateHtml();
    if(document.querySelector('.keyboard')){
        renderButtonsToDom();
    }

}


const generateHtml= () => {
    document.querySelector('body').innerHTML = `<div class="container">
            <h1>Virtual Keyboard</h1>
            <textarea rows="10"></textarea>
            <div class="keyboard"></div>
            <h2>Клавиатура создана в операционной системе MacOs</h2>
            <h3>Смена языка по левой клавише CTRL + левая OPTION</h3>
        </div>`
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


