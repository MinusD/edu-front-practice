let captcha = {

    fails: 0,
    captchaBlock: document.getElementById('captcha'),
    captchaInput: document.getElementById('captcha-input'),
    captchaButton: document.getElementById('captcha-button'),
    captchaSpan: document.getElementById('captcha-output'),
    correctCaptcha: '',

    init() {
        this.fails = 0;
        // this.captchaBlock = document.getElementById('captcha');
        // this.captchaInput = document.getElementById('captcha-input');
        // this.captchaButton = document.getElementById('captcha-button');
        // this.captchaSpan = document.getElementById('captcha-output');

        console.log(this.captchaInput);

        // Генерация случайной строки
        let randomString = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < 5; i++) {
            randomString += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        this.correctCaptcha = randomString;
        this.captchaSpan.innerHTML = randomString;

        this.captchaButton.addEventListener('click', this.checkCaptcha);
    },

    checkCaptcha() {
        console.log(this.captchaInput);

        // if (this.captchaInput.value === this.correctCaptcha) {
        //     this.captchaBlock.style.display = 'none';
        //     this.failds = 1;
        // } else {
        //     this.captchaInput.value = '';
        // }
    }
};

cap = captcha;
cap.init();

