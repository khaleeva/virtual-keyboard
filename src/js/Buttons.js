import {logPlugin} from "@babel/preset-env/lib/debug";

export class Buttons {
    constructor(node, {key, code, width, type, ...rest}) {
        this.node = node;
        this.key = key;
        this.code = code;
        this.width = width;
        this.type = type;

    }

    generateButtons() {
        let btn_container = document.createElement('button');
        btn_container.className = 'button';
        btn_container.style.width = `${this.width * 60}px`;
        btn_container.innerHTML = `${this.key}`;
        btn_container.setAttribute('data-code', this.code);
        if (this.type) {
            btn_container.className = 'button button_colored'
            btn_container.setAttribute('data-type', this.type);
            btn_container.addEventListener('click', (e) => {
                const functionName = e.target.dataset.type;
                this[functionName]()
                e.target.blur();
            })

            document.addEventListener('keydown', (e) => {
                if (e.code === this.code) {
                    const functionName = 'backspace';
                    this[functionName]();
                    e.preventDefault();
                }
            });

        } else {
            if (this.code === 'ArrowUp' || this.code === 'ArrowDown' || this.code === 'ArrowRight' || this.code === 'ArrowLeft') {
                btn_container.className = 'button button_colored'
            }
            btn_container.addEventListener('click', (e) => {
                this.handleClickChar(e)
                e.target.blur();
            })
            document.addEventListener('keydown', (e) => this.handleKeyDownChar(e))

        }

        document.addEventListener('keyup', (e) => e.target.blur())


        return btn_container
    }

    handleKeyDownChar(e) {
        const physicalKey = this.code;
        const button = document.querySelector(`button[data-code="${e.code}"]`);
        if (button) {
            button.focus()
        }
        if (e.code === physicalKey) {
            this.node.value += this.key;
            e.preventDefault();
        }

    }


    handleClickChar(e) {
        const button = e.target;
        button.focus();
        this.node.value += this.key;
    }


    del() {
        this.node.focus()
        const currentValue = this.node.value;
        const start = this.node.selectionStart;
        if (start < currentValue.length) {
            this.node.value = currentValue.slice(0, start) + currentValue.slice(start + 1)
            this.node.selectionStart = start;
            this.node.selectionEnd = start;
        } else{
            this.node.selectionStart = currentValue.length;
            this.node.selectionEnd = currentValue.length;
        }

    }


    backspace() {
        this.node.focus()
        const currentValue = this.node.value;
        const start = this.node.selectionStart;

        if (start === 0) {
            return;
        } else {
            this.node.value = currentValue.slice(0, start - 1) + currentValue.slice(start);
            this.node.selectionStart = start - 1;
            this.node.selectionEnd = start - 1;
        }
    }


}
