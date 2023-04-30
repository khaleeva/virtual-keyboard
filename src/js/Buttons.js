


export class Buttons {
    constructor(node, {key, code, width, type, ...rest}) {
        this.node = node;
        this.key = key;
        this.code = code;
        this.width = width;
        this.type = type;
        this.isCapsLockOn = false;
        this.btnContainer = null;

    }


    generateButtons() {
        this.btnContainer = document.createElement('button');
        this.btnContainer.className = 'button';
        this.btnContainer.style.width = `${this.width * 60}px`;
        this.btnContainer.setAttribute('data-code', this.code);
        this.btnContainer.setAttribute('data-key', this.key);
        this.btnContainer.innerHTML = `${this.key}`


        if (this.type) {
            this.btnContainer.className = 'button button_colored'
            this.btnContainer.setAttribute('data-type', this.type);
            this.btnContainer.addEventListener('click', (e) => {
                const functionName = e.target.dataset.type;
                this[functionName]()
                e.target.blur();
            })

            if (this.type === 'caps') {
                this.btnContainer.addEventListener('click', (e) => {
                    this.btnContainer.classList.toggle('button_caps')
                    this.updateButtonContainer()
                })
            }

            document.addEventListener('keydown', (e) => {
                if (e.code === this.code) {
                    const functionName = 'backspace';
                    this[functionName]();
                    e.preventDefault();
                }
            });

        } else {
            if (this.code === 'ArrowUp' || this.code === 'ArrowDown' || this.code === 'ArrowRight' || this.code === 'ArrowLeft') {
                this.btnContainer.className = 'button button_colored'
            }
            this.btnContainer.addEventListener('click', (e) => {
                this.handleClickChar(e)
                e.target.blur();
            })
            document.addEventListener('keydown', (e) => this.handleKeyDownChar(e))

        }

        document.addEventListener('keyup', (e) => e.target.blur())


        return this.btnContainer
    }

    caps(){
        const button_caps = document.querySelector(`button[data-type="caps"]`);
        this.isCapsLockOn = !button_caps.classList.contains('button_caps');
        this.updateButtonContainer()
    }


    handleKeyDownChar(e) {
        const physicalKey = this.code;
        const button = document.querySelector(`button[data-code="${e.code}"]`);
        if (button) {
            button.focus()
        }
        if (e.code === physicalKey) {
            const button_caps = document.querySelector(`button[data-type="caps"]`);
            let isCapsLockOn = button_caps.classList.contains('button_caps');
            const charToAdd = isCapsLockOn ? this.key.toUpperCase() : this.key.toLowerCase();
            this.node.value += charToAdd;
            e.preventDefault();
        }

    }

    handleClickChar(e) {
        const button = e.target;
        button.focus();
        const button_caps = document.querySelector(`button[data-type="caps"]`);
        let isCapsLockOn = button_caps.classList.contains('button_caps');
        const charToAdd = isCapsLockOn ? this.key.toUpperCase() : this.key.toLowerCase();
        this.node.value += charToAdd;
    }

    updateButtonContainer(){
        const buttons = document.querySelectorAll('button')
        if(this.isCapsLockOn){
            buttons.forEach(btn => {
                if(!btn.dataset.type){
                    let key = btn.dataset.key;
                    btn.innerHTML = `${key.toUpperCase()}`
                }
            })

        } else {
            buttons.forEach(btn => {
                let key = btn.dataset.key;
                btn.innerHTML = `${key.toLowerCase()}`
            })
        }

        return this.isCapsLockOn

    }



    del() {
        this.node.focus()
        const currentValue = this.node.value;
        const start = this.node.selectionStart;
        if (start < currentValue.length) {
            this.node.value = currentValue.slice(0, start) + currentValue.slice(start + 1)
            this.node.selectionStart = start;
            this.node.selectionEnd = start;
        } else {
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
