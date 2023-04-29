export class Buttons {
    constructor({key, code, width, ...rest}) {
        this.key = key;
        this.code = code;
        this.width = width;
    }

    generateButtons() {
        let btn_container = document.createElement('button');
        btn_container.className = 'button';
        btn_container.style.width = `${this.width * 60}px`;
        btn_container.innerHTML = `${this.key}`
        return btn_container
    }



}
