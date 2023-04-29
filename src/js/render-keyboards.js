import {macKeyboardRU} from "./keyboard-ru";

import {Buttons} from "./Button";

export const RenderKeyboard = () => {


    const renderButtonsToDom = () => {
        const keyboard = document.querySelector('.keyboard')
        generateButton(macKeyboardRU).forEach(article => {
            keyboard.append(article.generateButtons())
        })
    }

    const generateButton = (data) => {
        let buttons = [];
        data.forEach(btn => {
            buttons.push(new Buttons(btn))
        });
        return buttons;
    }


    renderButtonsToDom()











}

