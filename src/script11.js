/*
Создайте массив с товарами/элементами сайта (например, для корзины). По нажатию кнопки один из элементов массива
должен меняться на другой, по нажатию на другую кнопку первый элемент удаляется.
 */

let arr = ['item1 - 1',
    'item2 - 1 2',
    'item3 - 1 2 3',
    'item4 - 1 2 3 4',
    'item5 - 1 2 3 4 5',
    'item6 - 1 2 3 4 5 6',
    'item7 - 1 2 3 4 5 6 7',
    'item8 - 1 2 3 4 5 6 7 8',
    'item9 - 1 2 3 4 5 6 7 8 9',
    'item10 - 1 2 3 4 5 6 7 8 9 10',
];

const insertArrayToPage = (arr) => {
    let task1container = document.getElementById('task1container');
    let prev = document.getElementById('task1ul');
    if (prev) {
        prev.remove();
    }
    let ul = document.createElement('ul');
    ul.id = 'task1ul';
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = arr[i];
        ul.appendChild(li);
    }
    task1container.appendChild(ul);
}

insertArrayToPage(arr);

const random = (max) => {
    return Math.floor(Math.random() * max);
}

const changeItem = () => {
    let index1 = random(arr.length);
    let index2 = random(arr.length);
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
    insertArrayToPage(arr);
}

const deleteItem = () => {
    arr.shift();
    console.log(arr);
    insertArrayToPage(arr);
}

/*
Создайте фильтр, который принимает массив, ищет элементы со значениями больше или равными a и меньше или
равными b и возвращает результат в виде массива. (Функция должна возвращать новый массив и не изменять исходный.)
 */

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filter = (a, b) => {
    let newArr = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] >= a && arr2[i] <= b) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filter(3, 7));

/*
Создайте сортировку на сайте элементов в порядке возрастания/убывания.
 */

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sortFunc = (a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}


console.log(arr3.sort(sortFunc));
console.log(arr3.sort(sortFunc).reverse());

/*
В элементе уведомлений, созданном ранее, добавьте появление новых уведомлений каждые 3 секунды
(счетчик новых уведомлений должен обновляться, содержание элемента на ваше усмотрение).

При нажатии на кнопку уведомлений, с использованием z, остановите
счетчик новых уведомлений на 10 секунд.
 */

let counter = 2;

const addNotification = () => {
    let notis = document.getElementById('notis')
    let notisCounter = document.getElementById('notis-counter')
    let notification = document.createElement('div');
    counter++;
    notis.insertAdjacentHTML("afterbegin",
        `<div class="noti-item">
                    <div class="noti-item__content">
                        <div class="noti-item__content__title">Уведомление ${counter}</div>
                    </div>
                </div>`);
    notisCounter.innerHTML = counter;
}

const delay = (f, ms) => {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

let interval = setInterval(addNotification, 3000);

const stopNotifications = () => {
    clearInterval(interval);
    interval = setInterval(delay(addNotification, 10000), 3000);
}