const reg = () => {
    let ans = document.getElementById('ans').value;
    if (ans === "Да") {
        alert('Круто!');
    } else {
        alert('Попробуй ещё раз');
    }
}

const login = () => {
    let user = prompt('Введите логин');
    if (user === "Админ") {
        let pass = prompt('Введите пароль');
        if (pass === "Я главный") {
            alert('Здравствуйте!');
        } else {
            alert('Неверный пароль');
        }
    } else if (user == null) {
        alert('Отмена');
    } else {
        alert('Я вас не знаю');
    }
}

const like = () => {
    let like = document.getElementById('like');
    if (like.style.backgroundColor !== 'red') {
        like.style.backgroundColor = 'red';
    } else {
        like.style.backgroundColor = 'gray';
    }
}

let isStarted = false;
let arr = [];
let count = 0;
let interval = 2;


const checker = (event) => {
    if (isStarted) {
        if (count % interval === 0) {
            let clonedNode = document.getElementById("collapse").cloneNode(true);
            clonedNode.id = "collapse" + Math.random();

            // Добавляем id элемента в массив
            arr.push(clonedNode.id);
            clonedNode.style.display = "absolute";
            clonedNode.style.top = event.clientY - 50 + "px";
            clonedNode.style.left = event.clientX - 50 + "px";
            document.getElementById('colcon').appendChild(clonedNode);
        }
        count++;
    }
}

const start = () => {
    isStarted = ! isStarted;
    console.log('start');
}

const stop = () => {
    isStarted = false;
    console.log('stop');

    // Удаляем все элементы из массива
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).remove();
    }

    // Очищаем массив
    arr = [];
}

let isStarted2 = false;
let arr2 = [];
let count2 = 0;
let interval2 = 2;


const checker2 = (event) => {
    if (isStarted2) {
        if (count2 % interval2 === 0) {
            let clonedNode = document.getElementById("collapse2").cloneNode(true);
            clonedNode.id = "collapse2" + Math.random();

            // Добавляем id элемента в массив
            arr2.push(clonedNode.id);
            clonedNode.style.display = "absolute";
            clonedNode.style.top = event.clientY - 50 + "px";
            clonedNode.style.left = event.clientX - 50 + "px";
            document.getElementById('colcon2').appendChild(clonedNode);
        }
        count2++;
    }
}

const start2 = () => {
    isStarted2 = ! isStarted2;
    console.log('start');
}

const stop2 = () => {
    isStarted2 = false;
    console.log('stop');

    // Удаляем все элементы из массива
    for (let i = 0; i < arr2.length; i++) {
        document.getElementById(arr2[i]).remove();
    }

    // Очищаем массив
    arr2 = [];
}