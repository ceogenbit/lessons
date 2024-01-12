'use strict'

/* ================================================================================================ */
/*
Задача №1
Отримати в константу елемент <body>
*/
const bodyElement = document.body;
console.log(bodyElement);
/* ================================================================================================ */
/*
Задача №2
Написати функцію, яка додає в <body> список UL
з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
*/
function createList(value = 3) {
    let ulElement = document.createElement("ul");
    for (let i = 1; i <= value; i++) {
        let liElement = document.createElement("li");
        liElement.textContent = "Елемент " + i;
        ulElement.appendChild(liElement);
    }
    document.body.appendChild(ulElement);
}
createList();
/* ================================================================================================ */
/*
Задача №3
Додати до елементу <body> класс loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тесту зелений.
*/
function addLoaded() {
    document.body.classList.add("loaded");
    if (document.body.classList.contains("loaded")) {
        document.body.style.color = "green";
    }
}
addLoaded();
/* ================================================================================================ */
/*
Задача №4
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
*/
const items = document.querySelectorAll('.item');
items.forEach((item, index) => {
    item.textContent = "Елемент №" + (index + 1);
    item.classList.add("active");
});
/*
Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки
*/
window.addEventListener('load', function() {
    document.querySelector('.button').scrollIntoView({ behavior: 'smooth' });
});  
/*
Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Поім отримати значення трибуту, та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний
*/
let linkElement = document.querySelector('.link');
linkElement.setAttribute('data-value', 100);
let dataValue = linkElement.getAttribute('data-value');
if (parseInt(dataValue) < 200) {
    linkElement.style.color = 'red';
}