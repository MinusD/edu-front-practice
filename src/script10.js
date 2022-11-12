class Captcha {
    constructor(length) {
        this.failed = 0;
        this.length = length;
        this.captcha = document.getElementById('captcha');
        this.captchaInput = document.getElementById('captcha-input');
        this.captchaButton = document.getElementById('captcha-button');
        this.captchaOutput = document.getElementById('captcha-output');


        // Случайнай генирация больших и маленьких букв
        this.captchaText = '';
        let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        for (let i = 0; i < this.length; i++) {
            this.captchaText += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        this.captchaOutput.innerHTML = this.captchaText;

        this.captchaButton.addEventListener('click', this.checkCaptcha.bind(this));
    }

    checkCaptcha() {
        if (this.failed === 0) {
            if (this.captchaInput.value.trim() === this.captchaText) {
                this.hideCaptcha();
            } else {
                this.failed = 1;
                this.captchaInput.value = '';
                this.captchaInput.placeholder = 'Неверно';
                this.captchaInput.style.borderColor = 'red';
                this.captchaButton.innerHTML = 'Попробовать еще раз';
                this.generateCaptchaV2();
            }
        } else {
            if (this.captchaInput.value.trim() === this.captchaText.toString()) {
                this.hideCaptcha();
            } else {
                this.failed++;
                this.generateCaptchaV2();
            }
        }
    }

    generateCaptchaV2() {
        // Генерируем 2 случайных числа и операцию

        let num1 = Math.floor(Math.random() * 10);
        let num2 = Math.floor(Math.random() * 10);
        let operation = Math.floor(Math.random() * 2);

        if (operation === 0) {
            this.captchaText = num1 + num2;
            this.captchaOutput.innerHTML = num1 + ' + ' + num2;
        } else {
            this.captchaText = num1 - num2;
            this.captchaOutput.innerHTML = num1 + ' - ' + num2;
        }
    }

    hideCaptcha() {
        this.captcha.style.display = 'none';
        let btn = document.getElementById('btn-for-captcha');
        btn.disabled = false;
    }
}

let captcha = new Captcha(8);

const reg = () => {
    // let lk = {
    //     name: 213,
    // };
    // console.log(lk.isEmpty());
    const ans = document.getElementById('ans').value;
    // Использовать isEmpty(obj)
    // if (ans.isEmpty()) {
    //     let inputAns = document.getElementById('ans');
    //     inputAns.style.borderColor = 'red';
    // } else {
    if (ans === "Да") {
        alert('Круто!');
    } else {
        alert('Попробуй ещё раз');
    }
    // }
}

// Task 2

function Accumulator(startingValue) {
    this.value = parseInt(startingValue, 10);
    this.read = function () {
        this.value += parseInt(prompt('Введите число'), 10);
    };
}

const createAccumulator = () => {
    let val = document.getElementById('in-sum').value;
    let accumulator = new Accumulator(val);
    accumulator.read();
    accumulator.read();
    accumulator.read();
    alert(accumulator.value);
}

// Task 3
const truncate = (str, maxlength) => {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    } else {
        return str;
    }
}

const goTruncate = () => {
    let elem1 = document.getElementById('card1');
    let elem2 = document.getElementById('card2');
    let elem3 = document.getElementById('card3');

    elem1.innerHTML = truncate(elem1.innerHTML, 80);
    elem2.innerHTML = truncate(elem2.innerHTML, 80);
    elem3.innerHTML = truncate(elem3.innerHTML, 80);
}

goTruncate();