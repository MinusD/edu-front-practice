/*
Сделать ссылки на внешние ресурсы другого цвета.
 */
let domain = window.location.href.split('/');

const links = document.querySelectorAll('a');

for (let link of links) {
    if (!link.href.includes(domain[2])) {
        link.style.color = 'orange';
    }
}

/*
Напишите интерфейс для создания списка.
Для каждого пункта:
•	Запрашивайте содержимое пункта у пользователя с помощью prompt.
•	Создавайте элемент <li> и добавляйте его к <ul>.
•	Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
•	Все элементы должны создаваться динамически.
•	Если пользователь вводит HTML-теги, они должны обрабатываться как текст.
*/


let ul = document.getElementById('list');

const setList = (data) => {
    let li = document.createElement('li');
    li.innerHTML = data.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    ul.append(li);
}

const createList = () => {
    let li = document.createElement('li');
    let text = prompt('Введите текст пункта списка', '');
    if (text === null || text === '') {
        return;
    }
    setList(text);
    createList();
}

/*
3.	Напишите функцию showNotification(options), которая создаёт уведомление:
<div class="notification"> с заданным содержимым. Уведомление должно автоматически
исчезнуть через 1,5 секунды.
 */

const showNotification = (options) => {
    let cont = document.getElementById('noti-cont');
    let div = document.createElement('div');
    div.className = 'notification';
    div.innerHTML = options.title + '<br>' + options.text;
    cont.append(div);
    setTimeout(() => div.remove(), 1500);
}

const createNotification = () => {
    let title = document.getElementById('n-title').value;
    let text = document.getElementById('n-text').value;
    showNotification({title: title, text: text});
}

const createNotification2 = () => {
    let title = document.getElementById('n-title').value;
    let text = document.getElementById('n-text').value;
    showNotification2({title: title, text: text});
}

/*
Добавьте на сайт элемент, в котором по центру будет позиционироваться картинка.
И элемент, и картинка должны позиционироваться в центре экрана. Картинка должна
позиционироваться за счёт JavaScript, а не CSS. Код должен работать с любым
размером картинки (10, 20, 30 пикселей) и любым размером поля без привязки к
исходным значениям. Сделайте вывод координат того места куда кликает пользователь.
 */

const centerImage = () => {
    let img = document.getElementById('center-img');
    img.style.height = '100px';
    img.style.width = '100px';
    let cont = document.getElementById('center-cont');
    img.style.left = (cont.offsetWidth - img.offsetWidth) / 2 + 'px';
    img.style.top = (cont.offsetHeight - img.offsetHeight) / 2 + 'px';
}
centerImage();

window.addEventListener('resize', centerImage);

const showCoords = (event) => {
    let coords = document.getElementById('coords');
    coords.innerHTML = 'X: ' + event.clientX + ' Y: ' + event.clientY;
}


/*
5.	Для уведомлений, созданных ранее, при помощи JavaScript
(с применением делегирования событий. Должен быть лишь один обработчик
на элементе-контейнере для всего.) для каждого сообщения добавьте в верхний
правый угол кнопку закрытия.
 */


const showNotification2 = (options) => {
    let notification = document.createElement('div');
    notification.className = 'notification';

    notification.innerHTML = options.title + '<br>' + options.text;
    document.getElementById('noti-cont').append(notification);

    let panes = document.querySelectorAll('.notification');

    notification.insertAdjacentHTML("afterbegin", '<button class="remove-button">x&nbsp;</button>');
    notification.firstChild.onclick = () => notification.remove();
}