
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
        btn_container.innerHTML = `${this.key}`;
        btn_container.setAttribute('data-code', this.code);
        btn_container.addEventListener('click', (e) => {
            this.typeText(e)
            e.target.blur();
        })
        document.addEventListener('keydown', (e) => this.handleKeyDown(e))
        document.addEventListener('keyup', (e) => {
            e.target.blur()
        })
        return btn_container
    }

    handleKeyDown(e) {
        const textArea = document.querySelector('textarea');
        const physicalKey = this.code;
        const button = document.querySelector(`button[data-code="${e.code}"]`);
        if(button){
            button.focus()
        }
        if (e.code === physicalKey) {
            textArea.value += this.key;
            e.preventDefault();
        }

    }

    typeText (e) {
        const textArea = document.querySelector('textarea');
        textArea.value += this.key;
        const button = e.target;
        button.focus();
    }


}
