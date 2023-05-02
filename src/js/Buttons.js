
export class Buttons {
    constructor(node, {key, shiftKey, keyEn, shiftKeyEn, lang, code, width, type, ...rest}) {
        this.node = node;
        this.key = key;
        this.shiftKey = shiftKey;
        this.keyEn = keyEn;
        this.shiftKeyEn = shiftKeyEn;
        this.lang = lang;
        this.code = code;
        this.width = width;
        this.type = type;
        this.isCapsLockOn = false;
        this.btnContainer = null;
        this.curLang = 'ru';
        this.currentLanguage = localStorage.getItem('language') || this.curLang;
    }

    generateButtons() {
        this.btnContainer = document.createElement('button');
        this.btnContainer.className = 'button';
        this.btnContainer.style.width = `${this.width * 60}px`;
        this.btnContainer.setAttribute('data-code', this.code);
        this.btnContainer.setAttribute('data-key', this.key);
        this.btnContainer.setAttribute('data-keyen', this.keyEn);

        this.btnContainer.innerHTML = `${this.currentLanguage === 'ru' ? this.key : this.keyEn}`;

        if (this.lang === 'true') {

            document.addEventListener('keydown', (e) => {
                if (e.code === 'ControlLeft') {
                    window.localStorage.setItem('ctrlActive', 'true');
                } else if (e.code === 'AltLeft') {
                    window.localStorage.setItem('OptionActive', 'true');
                }
                this.toggleLang();

                const capsButton = document.querySelector(`button[data-type='caps']`);
                let shiftActive = window.localStorage.getItem('shiftActive');
                if (capsButton.classList.contains('button_caps') && !shiftActive) {
                    this.isCapsLockOn = true;
                    this.updateButtonContainer(true);
                } else if (capsButton.classList.contains('button_caps') && shiftActive) {
                    this.isCapsLockOn = false;
                    this.updateButtonContainer();
                } else if (!capsButton.classList.contains('button_caps') && shiftActive) {
                    this.isCapsLockOn = true;
                    this.updateButtonContainer();
                } else {
                    this.isCapsLockOn = false;
                    this.updateButtonContainer();
                }
            });

            document.addEventListener('keyup', (e) => {
                if (e.code === 'ControlLeft') {
                    localStorage.setItem('ctrlActive', 'false');
                } else if (e.code === 'AltLeft') {
                    localStorage.setItem('OptionActive', 'false');
                }
                this.toggleLang();
            });

        }

        if (this.shiftKey) {
            this.btnContainer.setAttribute('data-shiftkey', this.shiftKey);
        }

        if (this.shiftKeyEn) {
            this.btnContainer.setAttribute('data-shiftkeyen', this.shiftKeyEn);
        }


        if (this.type) {
            this.btnContainer.className = 'button button_colored';
            this.btnContainer.setAttribute('data-type', this.type);
            this.btnContainer.addEventListener('mousedown', (e) => {
                const functionName = e.target.dataset.type;
                this[functionName]();
                e.target.classList.add('button_highlight');
                e.preventDefault();
            });

            this.btnContainer.addEventListener('mouseup', (e) => {
                e.target.classList.remove('button_highlight');
            });


            document.addEventListener('keydown', (e) => {
                if (e.code === this.code) {
                    const functionName = this.type;
                    this[functionName]();
                    const button = document.querySelector(`button[data-code='${e.code}']`);
                    button.classList.add('button_highlight');
                    e.preventDefault();
                }
            });

            document.addEventListener('keyup', (e) => {
                if (e.code === this.code) {
                    const button = document.querySelector(`button[data-code='${e.code}']`);
                    button.classList.remove('button_highlight');
                }
            });

            if (this.type === 'caps') {
                this.btnContainer.addEventListener('mousedown', (e) => {
                    this.btnContainer.classList.toggle('button_caps');
                    this.isCapsLockOn = this.btnContainer.classList.contains('button_caps');
                    this.updateButtonContainer();
                });

                document.addEventListener('keydown', (e) => {
                    if (e.key === 'CapsLock') {
                        this.btnContainer.classList.add('button_caps');
                        this.isCapsLockOn = true;
                        this.updateButtonContainer();
                    }
                });

                document.addEventListener('keyup', (e) => {
                    if (e.key === 'CapsLock') {
                        this.btnContainer.classList.remove('button_caps');
                        this.isCapsLockOn = false;
                        this.updateButtonContainer();
                    }
                });

            }

            if (this.type === 'shift') {
                this.btnContainer.addEventListener('mousedown', (e) => {
                    this.btnContainer.classList.add('button_shift');
                    const capsButton = document.querySelector(`button[data-type='caps']`);
                    this.isCapsLockOn = !capsButton.classList.contains('button_caps');
                    this.updateButtonContainer();
                });

                this.btnContainer.addEventListener('mouseup', (e) => {
                    this.btnContainer.classList.remove('button_shift');
                    window.localStorage.removeItem('shiftActive');
                    const capsButton = document.querySelector(`button[data-type='caps']`);
                    this.isCapsLockOn = capsButton.classList.contains('button_caps');
                    this.updateButtonContainer();
                });

                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Shift') {
                        this.btnContainer.classList.add('button_shift');
                        const capsButton = document.querySelector(`button[data-type='caps']`);
                        this.isCapsLockOn = !capsButton.classList.contains('button_caps');
                        console.log( 'DOWN', this.isCapsLockOn);
                        this.updateButtonContainer();
                    }

                });

                document.addEventListener('keyup', (e) => {
                    if (e.key === 'Shift') {
                        this.btnContainer.classList.remove('button_shift');
                        window.localStorage.removeItem('shiftActive');
                        const capsButton = document.querySelector(`button[data-type='caps']`);
                        this.isCapsLockOn = !capsButton.classList.contains('button_caps');
                        console.log( 'UP', this.isCapsLockOn);
                        this.updateButtonContainer();
                    }
                });

            }


        } else {
            this.btnContainer.addEventListener('mousedown', (e) => {
                this.handleClickChar(e);
                e.target.classList.add('button_highlight');
            });

            this.btnContainer.addEventListener('mouseup', (e) => {
                e.target.classList.remove('button_highlight');
            });

            document.addEventListener('keydown', (e) => this.handleKeyDownChar(e));

            document.addEventListener('keyup', (e) => {
                if (e.code === this.code) {
                    const button = document.querySelector(`button[data-code='${e.code}']`);
                    button.classList.remove('button_highlight');
                }
            });

            if (this.code === 'ArrowUp' || this.code === 'ArrowDown' || this.code === 'ArrowRight' || this.code === 'ArrowLeft') {
                this.btnContainer.className = 'button button_colored';
            }
        }

        return this.btnContainer;
    }

    handleKeyDownChar(e) {
        const physicalKey = this.code;
        const button = document.querySelector(`button[data-code='${e.code}']`);
        button.classList.add('button_highlight');
        if (e.code === physicalKey) {
            this.node.value += this.isRegisterChar();
            e.preventDefault();
        }

    }

    handleClickChar(e) {
        this.node.value += this.isRegisterChar();
        e.preventDefault();
    }

    updateButtonContainer() {
        const buttons = document.querySelectorAll('button:not([data-type])');
        let shiftActive = window.localStorage.getItem('shiftActive');
        let lang = window.localStorage.getItem('language');

        if (this.isCapsLockOn) {
            buttons.forEach(btn => {
                let key = btn.dataset.key;
                let shiftKey = btn.dataset.shiftkey;
                let keyEn = btn.dataset.keyen;
                let shiftKeyEn = btn.dataset.shiftkeyen;
                if (lang === 'ru') {
                    btn.innerHTML = `${shiftActive && shiftKey ? shiftKey.toUpperCase() : key.toUpperCase()}`;
                } else {
                    btn.innerHTML = `${shiftActive && shiftKeyEn ? shiftKeyEn.toUpperCase() : keyEn.toUpperCase()}`;
                }
            });

        } else {
            buttons.forEach(btn => {
                let key = btn.dataset.key;
                let shiftKey = btn.dataset.shiftkey;
                let keyEn = btn.dataset.keyen;
                let shiftKeyEn = btn.dataset.shiftkeyen;
                if (lang === 'ru') {
                    btn.innerHTML = `${shiftActive && shiftKey ? shiftKey.toLowerCase() : key.toLowerCase()}`;
                } else {
                    btn.innerHTML = `${shiftActive && shiftKeyEn ? shiftKeyEn.toLowerCase() : keyEn.toLowerCase()}`;
                }
            });
        }

    }


    del() {
        this.node.focus();
        const currentValue = this.node.value;
        const start = this.node.selectionStart;
        if (start < currentValue.length) {
            this.node.value = currentValue.slice(0, start) + currentValue.slice(start + 1);
            this.node.selectionStart = start;
            this.node.selectionEnd = start;
        } else {
            this.node.selectionStart = currentValue.length;
            this.node.selectionEnd = currentValue.length;
        }

    }

    backspace() {
        this.node.focus();
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

    tab() {
        let start = this.node.selectionStart;
        let end = this.node.selectionEnd;
        this.node.value = this.node.value.substring(0, start) + '  ' + this.node.value.substring(end);
        this.node.selectionStart = start + 2;
        this.node.selectionEnd = end + 2;
    }

    enter() {
        let start = this.node.selectionStart;
        let end = this.node.selectionEnd;
        this.node.value = this.node.value.substring(0, start) + '\n' + this.node.value.substring(end);
        this.node.selectionStart = start + 1;
        this.node.selectionEnd = end + 1;
    }

    caps() {
        const button_caps = document.querySelector(`button[data-type='caps']`);
        this.isCapsLockOn = !button_caps.classList.contains('button_caps');
        this.updateButtonContainer();
    }

    isRegisterChar() {
        const shiftButton = document.querySelector(`button[data-type='shift']`);
        const capsButton = document.querySelector(`button[data-type='caps']`);
        let isShiftActive = shiftButton && shiftButton.classList.contains('button_shift');
        let isCapsLockActive = capsButton && capsButton.classList.contains('button_caps');
        let shiftActive = !!window.localStorage.getItem('shiftActive');
        let lang = window.localStorage.getItem('language');

        if (isShiftActive && !isCapsLockActive) {
            if (lang === 'ru') {
                return shiftActive ? this.shiftKey.toUpperCase() : this.key.toUpperCase();
            } else {
                return shiftActive ? this.shiftKeyEn.toUpperCase() : this.keyEn.toUpperCase();
            }
        } else if (!isShiftActive && isCapsLockActive) {
            if (lang === 'ru') {
                return this.key.toUpperCase();
            } else {
                return this.keyEn.toUpperCase();
            }

        } else if (isShiftActive && isCapsLockActive) {
            if (lang === 'ru') {
                return shiftActive ? this.shiftKey.toLowerCase() : this.key.toLowerCase();
            } else {
                return shiftActive ? this.shiftKeyEn.toLowerCase() : this.keyEn.toLowerCase();
            }
        } else {
            return lang === 'ru' ? this.key.toLowerCase() : this.keyEn.toLowerCase();
        }
    }


    option() {
        return;
    }


    ctrl() {
        return;
    }

    cmd() {
        return;
    }

    shift() {
        const button_shift = document.querySelector(`button[data-type='shift']`);
        this.isCapsLockOn = !button_shift.classList.contains('button_shift');
        window.localStorage.setItem('shiftActive', this.isCapsLockOn);
        this.updateButtonContainer();
    }


    toggleLang() {
        let ctrlActive = window.localStorage.getItem('ctrlActive') === 'true';
        let optActive = window.localStorage.getItem('OptionActive') === 'true';

        if (ctrlActive && optActive) {
            if (this.currentLanguage === 'ru') {
                this.currentLanguage = 'en';
                localStorage.setItem('language', this.currentLanguage);
            } else {
                this.currentLanguage = 'ru';
                localStorage.setItem('language', this.currentLanguage);
            }
        }

    }


}
