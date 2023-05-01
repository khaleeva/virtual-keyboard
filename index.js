(()=>{"use strict";const t=[{key:">",shiftKey:"<",code:"Backquote",width:"1",type:""},{key:"1",shiftKey:"!",code:"Digit1",width:"1",type:""},{key:"2",shiftKey:'"',code:"Digit2",width:"1",type:""},{key:"3",shiftKey:"№",code:"Digit3",width:"1",type:""},{key:"4",shiftKey:"%",code:"Digit4",width:"1",type:""},{key:"5",shiftKey:":",code:"Digit5",width:"1",type:""},{key:"6",shiftKey:",",code:"Digit6",width:"1",type:""},{key:"7",shiftKey:".",code:"Digit7",width:"1",type:""},{key:"8",shiftKey:"*",code:"Digit8",width:"1",type:""},{key:"9",shiftKey:"(",code:"Digit9",width:"1",type:""},{key:"0",shiftKey:")",code:"Digit0",width:"1",type:""},{key:"-",shiftKey:"_",code:"Minus",width:"1",type:""},{key:"=",shiftKey:"+",code:"Equal",width:"1",type:""},{key:"Backspace",shiftKey:"",code:"Backspace",width:"2.3",type:"backspace"},{key:"Tab",shiftKey:"",code:"Tab",width:"1.15",type:"tab"},{key:"й",shiftKey:"й",code:"KeyQ",width:"1",type:""},{key:"ц",shiftKey:"ц",code:"KeyW",width:"1",type:""},{key:"у",shiftKey:"у",code:"KeyE",width:"1",type:""},{key:"к",shiftKey:"к",code:"KeyR",width:"1",type:""},{key:"е",shiftKey:"е",code:"KeyT",width:"1",type:""},{key:"н",shiftKey:"н",code:"KeyY",width:"1",type:""},{key:"г",shiftKey:"г",code:"KeyU",width:"1",type:""},{key:"ш",shiftKey:"ш",code:"KeyI",width:"1",type:""},{key:"щ",shiftKey:"щ",code:"KeyO",width:"1",type:""},{key:"з",shiftKey:"з",code:"KeyP",width:"1",type:""},{key:"х",shiftKey:"х",code:"BracketLeft",width:"1",type:""},{key:"ъ",shiftKey:"ъ",code:"BracketRight",width:"1",type:""},{key:"ё",shiftKey:"ё",code:"Backslash",width:"1",type:""},{key:"del",shiftKey:"",code:"Delete",width:"1",type:"del"},{key:"Caps Lock",shiftKey:"",code:"CapsLock",width:"2.25",type:"caps"},{key:"ф",shiftKey:"ф",code:"KeyA",width:"1",type:""},{key:"ы",shiftKey:"ы",code:"KeyS",width:"1",type:""},{key:"в",shiftKey:"в",code:"KeyD",width:"1",type:""},{key:"а",shiftKey:"а",code:"KeyF",width:"1",type:""},{key:"п",shiftKey:"п",code:"KeyG",width:"1",type:""},{key:"р",shiftKey:"р",code:"KeyH",width:"1",type:""},{key:"о",shiftKey:"о",code:"KeyJ",width:"1",type:""},{key:"л",shiftKey:"л",code:"KeyK",width:"1",type:""},{key:"д",shiftKey:"д",code:"KeyL",width:"1",type:""},{key:"ж",shiftKey:"ж",code:"Semicolon",width:"1",type:""},{key:"э",shiftKey:"э",code:"Quote",width:"1",type:""},{key:"Enter",shiftKey:"",code:"Enter",width:"2.25",type:"enter"},{key:"Shift",shiftKey:"",code:"ShiftLeft",width:"2.25",type:"shift"},{key:"я",shiftKey:"я",code:"KeyZ",width:"1",type:""},{key:"ч",shiftKey:"ч",code:"KeyX",width:"1",type:""},{key:"с",shiftKey:"с",code:"KeyC",width:"1",type:""},{key:"м",shiftKey:"м",code:"KeyV",width:"1",type:""},{key:"и",shiftKey:"и",code:"KeyB",width:"1",type:""},{key:"т",shiftKey:"т",code:"KeyN",width:"1",type:""},{key:"ь",shiftKey:"ь",code:"KeyM",width:"1",type:""},{key:"б",shiftKey:"б",code:"Comma",width:"1",type:""},{key:"ю",shiftKey:"ю",code:"Period",width:"1",type:""},{key:"/",shiftKey:"?",code:"Slash",width:"1",type:""},{key:"↑",shiftKey:"",code:"ArrowUp",width:"1",type:""},{key:"Shift",shiftKey:"",code:"ShiftRight",width:"2.25",type:"shift"},{key:"Ctrl",shiftKey:"",code:"ControlLeft",width:"1",type:"ctrl"},{key:"Option",shiftKey:"",code:"AltLeft",width:"1",type:"option"},{key:"Command",shiftKey:"",code:"MetaLeft",width:"1.5",type:"cmd"},{key:" ",shiftKey:"",code:"Space",width:"5.95",type:""},{key:"Command",shiftKey:"",code:"MetaRight",width:"1.5",type:"cmd"},{key:"Option",shiftKey:"",code:"AltRight",width:"1",type:"option"},{key:"←",shiftKey:"",code:"ArrowLeft",width:"1",type:""},{key:"↓",shiftKey:"",code:"ArrowDown",width:"1",type:""},{key:"→",shiftKey:"",code:"ArrowRight",width:"1",type:""},{key:"Ctrl",shiftKey:"",code:"ControlRight",width:"1",type:"ctrl"}];class e{constructor(t,{key:e,shiftKey:i,code:s,width:o,type:n,...d}){this.node=t,this.key=e,this.shiftKey=i,this.code=s,this.width=o,this.type=n,this.isCapsLockOn=!1,this.btnContainer=null,this.isKeyPressed=!1}generateButtons(){return this.btnContainer=document.createElement("button"),this.btnContainer.className="button",this.btnContainer.style.width=60*this.width+"px",this.btnContainer.setAttribute("data-code",this.code),this.btnContainer.setAttribute("data-key",this.key),this.btnContainer.innerHTML=`${this.key}`,this.shiftKey&&this.btnContainer.setAttribute("data-shiftKey",this.shiftKey),this.type?(this.btnContainer.className="button button_colored",this.btnContainer.setAttribute("data-type",this.type),this.btnContainer.addEventListener("mousedown",(t=>{this[t.target.dataset.type](),t.target.classList.add("button_highlight"),t.preventDefault()})),this.btnContainer.addEventListener("mouseup",(t=>{t.target.classList.remove("button_highlight")})),document.addEventListener("keydown",(t=>{t.code===this.code&&(this[this.type](),document.querySelector(`button[data-code="${t.code}"]`).classList.add("button_highlight"),t.preventDefault())})),document.addEventListener("keyup",(t=>{t.code===this.code&&document.querySelector(`button[data-code="${t.code}"]`).classList.remove("button_highlight")})),"caps"===this.type&&(this.btnContainer.addEventListener("mousedown",(t=>{this.btnContainer.classList.toggle("button_caps"),this.updateButtonContainer()})),document.addEventListener("keydown",(t=>{"CapsLock"===t.key&&(this.isKeyPressed=!0,this.btnContainer.classList.add("button_caps"),this.isCapsLockOn=!0,this.updateButtonContainer())})),document.addEventListener("keyup",(t=>{"CapsLock"===t.key&&(this.isKeyPressed=!1,this.btnContainer.classList.remove("button_caps"),this.isCapsLockOn=!1,this.updateButtonContainer())}))),"shift"===this.type&&(this.btnContainer.addEventListener("mousedown",(t=>{this.btnContainer.classList.add("button_shift"),document.querySelector("button[data-type='caps']").classList.contains("button_caps")?(this.isCapsLockOn=!1,this.updateButtonContainer()):(this.isCapsLockOn=!0,this.updateButtonContainer())})),this.btnContainer.addEventListener("mouseup",(t=>{this.btnContainer.classList.remove("button_shift"),window.localStorage.removeItem("shiftActive"),document.querySelector("button[data-type='caps']").classList.contains("button_caps")?(this.isCapsLockOn=!0,this.updateButtonContainer()):(this.isCapsLockOn=!1,this.updateButtonContainer())})),document.addEventListener("keydown",(t=>{"Shift"===t.key&&(this.isKeyPressed=!0,this.btnContainer.classList.add("button_shift"),document.querySelector("button[data-type='caps']").classList.contains("button_caps")?(this.isCapsLockOn=!1,this.updateButtonContainer()):(this.isCapsLockOn=!0,this.updateButtonContainer()))})),document.addEventListener("keyup",(t=>{"Shift"===t.key&&(this.isKeyPressed=!1,this.btnContainer.classList.remove("button_shift"),window.localStorage.removeItem("shiftActive"),document.querySelector("button[data-type='caps']").classList.contains("button_caps")?(this.isCapsLockOn=!0,this.updateButtonContainer()):(this.isCapsLockOn=!1,this.updateButtonContainer()))})))):(this.btnContainer.addEventListener("mousedown",(t=>{this.handleClickChar(t),t.target.classList.add("button_highlight")})),this.btnContainer.addEventListener("mouseup",(t=>{t.target.classList.remove("button_highlight")})),document.addEventListener("keydown",(t=>this.handleKeyDownChar(t))),document.addEventListener("keyup",(t=>{t.code===this.code&&document.querySelector(`button[data-code="${t.code}"]`).classList.remove("button_highlight")})),"ArrowUp"!==this.code&&"ArrowDown"!==this.code&&"ArrowRight"!==this.code&&"ArrowLeft"!==this.code||(this.btnContainer.className="button button_colored")),this.btnContainer}handleKeyDownChar(t){const e=this.code;document.querySelector(`button[data-code="${t.code}"]`).classList.add("button_highlight"),t.code===e&&(this.node.value+=this.isRegisterChar(),t.preventDefault())}handleClickChar(t){this.node.value+=this.isRegisterChar(),t.preventDefault()}updateButtonContainer(){const t=document.querySelectorAll("button:not([data-type])");let e=!!window.localStorage.getItem("shiftActive");this.isCapsLockOn?t.forEach((t=>{if(!t.dataset.type){let i=t.dataset.key,s=t.dataset.shiftkey;t.innerHTML=`${e&&s?s.toUpperCase():i.toUpperCase()}`}})):t.forEach((t=>{let i=t.dataset.key,s=t.dataset.shiftkey;t.innerHTML=`${e&&s?s.toLowerCase():i.toLowerCase()}`}))}del(){this.node.focus();const t=this.node.value,e=this.node.selectionStart;e<t.length?(this.node.value=t.slice(0,e)+t.slice(e+1),this.node.selectionStart=e,this.node.selectionEnd=e):(this.node.selectionStart=t.length,this.node.selectionEnd=t.length)}backspace(){this.node.focus();const t=this.node.value,e=this.node.selectionStart;0!==e&&(this.node.value=t.slice(0,e-1)+t.slice(e),this.node.selectionStart=e-1,this.node.selectionEnd=e-1)}tab(){let t=this.node.selectionStart,e=this.node.selectionEnd;this.node.value=this.node.value.substring(0,t)+"  "+this.node.value.substring(e),this.node.selectionStart=t+2,this.node.selectionEnd=e+2}enter(){let t=this.node.selectionStart,e=this.node.selectionEnd;this.node.value=this.node.value.substring(0,t)+"\n"+this.node.value.substring(e),this.node.selectionStart=t+1,this.node.selectionEnd=e+1}caps(){const t=document.querySelector('button[data-type="caps"]');this.isCapsLockOn=!t.classList.contains("button_caps"),this.updateButtonContainer()}isRegisterChar(){const t=document.querySelector("button[data-type='shift']"),e=document.querySelector("button[data-type='caps']");let i=t&&t.classList.contains("button_shift"),s=e&&e.classList.contains("button_caps"),o=!!window.localStorage.getItem("shiftActive");return i&&!s?o?this.shiftKey.toUpperCase():this.key.toUpperCase():!i&&s?this.key.toUpperCase():i&&s&&o?this.shiftKey.toLowerCase():this.key.toLowerCase()}ctrl(){console.log("не выполнено")}cmd(){console.log("не выполнено")}shift(){const t=document.querySelector('button[data-type="shift"]');this.isCapsLockOn=!t.classList.contains("button_shift"),window.localStorage.setItem("shiftActive",this.isCapsLockOn),this.updateButtonContainer()}option(){console.log("не выполнено")}}window.onload=function(){i(),document.querySelector(".keyboard")&&s()};const i=()=>{document.querySelector("body").innerHTML='<div class="container">\n            <h1>Virtual Keyboard</h1>\n            <textarea rows="10"></textarea>\n            <div class="keyboard"></div>\n            <h2>Клавиатура создана в операционной системе MacOs</h2>\n        </div>'},s=()=>{const e=document.querySelector(".keyboard");o(t).forEach((t=>{e.append(t.generateButtons())}))},o=t=>{const i=document.querySelector("textarea");let s=[];return t.forEach((t=>{s.push(new e(i,t))})),s}})();