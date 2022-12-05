/*
 * 1.	Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том,
 * действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке. (Содержимое
 * #contents может быть загружено динамически и присвоено при помощи innerHTML. Так что найти все ссылки и поставить
 * на них обработчики нельзя. Используйте делегирование. Содержимое может иметь вложенные теги, в том числе внутри
 * ссылок, например,
 */


let contents = document.getElementById('contents');
contents.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && !confirm('Вы уверены, что хотите покинуть страницу?')) {
        e.preventDefault();
    }
});

/*
 * 2.	Создайте галерею изображений, в которой основное изображение изменяется при
 * клике на уменьшенный вариант.
 */

let gallery = document.getElementById('gallery');
gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        let bigImg = document.getElementById('bigImg');
        bigImg.src = e.target.src;
    }
});

/*
 * 3.	Создайте список, в котором элементы могут быть выделены, как в файловых менеджерах.
 * При клике на элемент списка выделяется только этот элемент (добавляется класс .selected),
 * отменяется выделение остальных элементов. Если клик сделан вместе с Ctrl (Cmd для Mac),
 * то выделение переключается на элементе, но остальные элементы при этом не изменяются.
 * (Предотвратите стандартное для браузера выделение текста при кликах.)
 */

let list = document.getElementById('list');
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        if (e.ctrlKey || e.metaKey) {
            e.target.classList.toggle('selected');
        } else {
            for (let li of list.children) {
                li.classList.remove('selected');
            }
            e.target.classList.add('selected');
        }
    }
});

/*
 * 4.	Создайте слайдер: Слайдер должен нормально работать при резком движении мыши влево или
 * вправо за пределы полосы. При этом бегунок должен останавливаться чётко в нужном конце полосы.
 * При нажатом бегунке мышь может выходить за пределы полосы слайдера, но слайдер пусть всё равно
 * работает (это удобно для пользователя).
 */

let slider = document.getElementById('slider');
let thumb = document.getElementById('thumb');
// console.log(thumb);

thumb.onmousedown = function (e) {
    let shiftX = e.clientX - thumb.getBoundingClientRect().left; // Смещение курсора относительно левого края thumb
    let sliderCoords = slider.getBoundingClientRect(); // Координаты слайдера

    document.onmousemove = function (e) {

        let newLeft = e.clientX - shiftX - sliderCoords.left; // Новое положение thumb относительно левого края слайдера
        console.log(e.clientX, shiftX, sliderCoords.left, newLeft);
        if (newLeft < 0) { // Не вылезать за левую границу
            newLeft = 0; // Прижать к левой границе
        }
        let rightEdge = slider.offsetWidth - thumb.offsetWidth; // Правая граница thumb
        if (newLeft > rightEdge) { // Не вылезать за правую границу
            newLeft = rightEdge; // Прижать к правой границе
        }

        thumb.style.left = newLeft + 'px'; // Передвинуть thumb
    };

    document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
    };

    return false;
}

/*
 * 5.	Добавьте возможность перетаскивать элементы (товары) в «корзину» сайта.
 * При этом итоговая стоимость корзины
 * должна изменяться в соответствии с ценой товара и количеством перенесенных элементов.
 */

let cart = document.getElementById('cart');
let cartData = document.getElementById('cart-list');
let goods = document.getElementById('goods');
let total = document.getElementById('total');
let elem;

goods.addEventListener('dragstart', (e) => {
    console.log('dragstart');
// Получаем элемент, который перетаскиваем
    elem = e.target;

    elem.style.opacity = '0.4';
    elem.style.transition = 'all 0.3s ease-in-out';


});

// Если мы над корзиной, то меняем её цвет
cart.addEventListener('dragover', (e) => {
    e.preventDefault();
    elem.style.transition = 'all 0.3s ease-in-out';
    cart.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
});

// Если мы убрали мышку с корзины, то меняем её цвет обратно
cart.addEventListener('dragleave', (e) => {
    e.preventDefault();
    elem.style.transition = 'all 0.3s ease-in-out';
    cart.style.backgroundColor = 'rgba(0, 0, 0, 0)';
});

// Если мы отпустили мышку, то меняем цвет обратно и добавляем товар в корзину
cart.addEventListener('drop', (e) => {
    console.log('drop');
    e.preventDefault();
    elem.style.transition = 'all 0.3s ease-in-out';
    cart.style.backgroundColor = 'rgba(0, 0, 0, 0)';

    let price = elem.getAttribute('data-price');
    // Имя хранится в заголовке h2
    let name = elem.querySelector('h2').textContent;
    let count = 1;
    // Проверяем, есть ли такой товар в корзине
    let isExist = false;
    let cartItems = cartData.querySelectorAll('div');
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].innerHTML.split(' - ')[0] === name) {
            isExist = true;
            let countGoods = cartItems[i].innerHTML.split(' - ')[2];
            // Обрезаем "шт"
            countGoods = countGoods.slice(0, countGoods.length - 3);
            countGoods = parseInt(countGoods);
            countGoods++;
            cartItems[i].innerHTML = `${name} - ${price} руб. - ${countGoods} шт.`;
        }
    }
    // Если товара нет в корзине, то добавляем его
    if (!isExist) {
        cartData.innerHTML += `<div class="cart-item">${name} - ${price} руб. - ${count} шт.</div>`;

    }

    total.innerHTML = `Итого: ${+total.innerHTML.split(' ')[1] + +price} руб.`;
});

goods.addEventListener('dragend', (e) => {
    let elem = e.target;
    elem.style.opacity = '1';
    elem.style.display = 'block';
});

/*
 * Анимация
 */

/*
 _        _______    _______  _______  _______ __________________ _______
( (    /|(  ____ \  (  ____ \(       )(  ___  )\__   __/\__   __/(  ____ \
|  \  ( || (    \/  | (    \/| () () || (   ) |   ) (      ) (   | (    \/
|   \ | || (__      | (_____ | || || || (___) |   | |      | |   | (__
| (\ \) ||  __)     (_____  )| |(_)| ||  ___  |   | |      | |   |  __)
| | \   || (              ) || |   | || (   ) |   | |      | |   | (
| )  \  || (____/\  /\____) || )   ( || )   ( |___) (___   | |   | (____/\
|/    )_)(_______/  \_______)|/     \||/     \|\_______/   )_(   (_______/

 _        _______  _______  _______ _________   _______ _________
| \    /\(  ____ )(  ___  )(  ____ \\__   __/  (  ____ \\__   __/|\     /|
|  \  / /| (    )|| (   ) || (    \/   ) (     | (    \/   ) (   | )   ( |
|  (_/ / | (____)|| (___) || (_____    | |     | (__       | |   | |   | |
|   _ (  |     __)|  ___  |(_____  )   | |     |  __)      | |   | |   | |
|  ( \ \ | (\ (   | (   ) |      ) |   | |     | (         | |   | |   | |
|  /  \ \| ) \ \__| )   ( |/\____) |   | | _   | (____/\   | |   | (___) |
|_/    \/|/   \__/|/     \|\_______)   )_(( )  (_______/   )_(   (_______)
                                          |/
 _______  _       _________ _______  _______ _________         _________
(  ___  )( (    /|\__   __/(       )(  ___  )\__   __/|\     /|\__   __/
| (   ) ||  \  ( |   ) (   | () () || (   ) |   ) (   | )   ( |   ) (
| (___) ||   \ | |   | |   | || || || (___) |   | |   | | _ | |   | |
|  ___  || (\ \) |   | |   | |(_)| ||  ___  |   | |   | |( )| |   | |
| (   ) || | \   |   | |   | |   | || (   ) |   | |   | || || |   | |
| )   ( || )  \  |___) (___| )   ( || )   ( |   | |   | () () |___) (___
|/     \||/    )_)\_______/|/     \||/     \|   )_(   (_______)\_______/

          _  _  _
|\     /|( )( )( )
| )   ( || || || |
| |   | || || || |
| |   | || || || |
| |   | |(_)(_)(_)
| (___) | _  _  _
(_______)(_)(_)(_)


 */

let container = document.getElementById('container');

// Заполнение контейнера разноцветными квадртатами
for (let i = 0; i < 100; i++) {

    let div = document.createElement('div');
    div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    div.className = 'sq';
    // Задаём позицию при помощи абсолютного позиционирования
    div.style.position = 'absolute';
    div.style.top = `${Math.floor(Math.random() * window.innerHeight * 0.9)}px`;
    div.style.left = `${Math.floor(Math.random() * window.innerWidth * 0.9)}px`;
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.transition = 'all 0.5 ease-in-out';
    container.appendChild(div);
}

container.addEventListener('click', (e) => {
    let elem = e.target;
    if (elem.className === 'sq') {
        console.log('click');
        // Запуск функции анимации падения с отскоком и запуск анимации соседних элементах с задержкой
        fall(elem);
        fall(elem.previousElementSibling);
        fall(elem.nextElementSibling);

    } else {
        return;
    }
});

container.addEventListener('mousemove', (e) => {
    let elem = e.target;
    if (elem.className === 'sq') {
        fall(elem);
    } else {
        return;
    }
});

// В качестве второго параметра передаётся ускорение падения
function fall(elem, acceleration = 1) {

    if (elem === null) {
        return;
    }

    let top = parseInt(elem.style.top);
    let left = parseInt(elem.style.left);
    let width = parseInt(elem.style.width);
    let height = parseInt(elem.style.height);

    // Проверяем, не достиг ли элемент нижней границы
    if (top + height < window.innerHeight * 0.9) {
        // Если не достиг, то падаем с ускорением
        elem.style.top = `${top + 10 * acceleration}px`;
        // Запускаем функцию падения снова через 0.1 секунды
        setTimeout(() => {
            fall(elem, acceleration + 0.1);
        }, 10);
    }
    // Если достиг, то отскакиваем
    else {
        if (acceleration > 1) {
            bounce(elem, acceleration);
        }
    }

// Отскок с ускорением
    function bounce(elem, acceleration = 1) {
        let top = parseInt(elem.style.top);
        let left = parseInt(elem.style.left);
        let width = parseInt(elem.style.width);
        let height = parseInt(elem.style.height);

        // Проверяем, не достиг ли элемент верхней границы
        if (acceleration > 0) {
            // Если не достиг, то отскакиваем с ускорением
            elem.style.top = `${top - 10 * acceleration}px`;
            // Запускаем функцию отскока снова через 0.1 секунды
            setTimeout(() => {
                bounce(elem, acceleration - 0.3);
            }, 10);
        }
        // Если достиг, то падаем снова
        else {
            fall(elem, acceleration);
        }
    }
}