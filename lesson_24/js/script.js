"use strict"

/* ================================================================================================ */
/*
Задача №1
Що потрапить в консоль?
*/
let someVar = 0
++someVar


if (someVar) {
	console.log(someVar)
}
/*
В консоль потрапить 1, бо застосовано iнкремент до значення змінної, 
інкремент збільшить значення з нуля до одиниці. 
*/
/* ================================================================================================ */
/*
Задача №2
За допомогою циклу FOR виведіть в консоль 10 рядків:
Пункт №1
Пункт №2
і т.д.
*/
let item = 1
for (item; item <= 10; ++item) {
    console.log(item)
}
/*
Присвоюїмо змінній початкове значення 1, далі створюємо цикл з умовою, 
якщо значення змінної менше 10, то додаємо до змінної одиницю і так до тих пір, 
поки умова не виконається і значення буде рівним 10.
*/
/* ================================================================================================ *
/*
Задача №3
Що потрапить в консоль ?
*/
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000')
}
/*
Спочатку 2 множимо на 20 і результат 40 прирівнюємо до 10: 40 не меньше і не дорівнює 10, тому отримуємо false.

Далі 30 ділимо на 2 і результат 15 прирівнюємо до 5: 15 не меньше 5, тому отримуємо false.

Далі 10 з типом даних number прирівнюємо до "10" з типом даних string, оператор порівняння переведе тип даних string на number, 
отримуємо true, бо в результаті 10 дорівнює 10.

Далі суворо прирівнюємо 20 з типом даних number до 20 з типом даних string. В результаті отримуємо false, 
тому, що символ суворого прирівняння не міняє типу даних і 20 (number) не дорівнює "20" (string).

Після операцій у нас виходить наступне: 
false || false && true || false
Враховуючи пріоритети операторів залишається наступне:
false || false || false, що в кінцевому результаті дає загальне значення false.
Отже, блок коду всередині умови if не виконається, і '000' не буде виведено в консоль.
*/
/* ================================================================================================ *
/*
Задача №4
Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
Функція не має повертати NaN, Infinite або помилку 
*/

function calcSum(a, b) {
    /* Перевірка на валідність значень a і b */
    if (typeof a !== `number` || typeof b !== `number`) {
        console.log(`Невалідні вхідні дані. Будь ласка, введіть числа.`)
        return
    }
    /* Перевірка на ділення на нуль */
    if (b === 0) {
        console.log(`Неможливо поділити на нуль.`)
        return
    }
    /* Виконання ділення і виведення результату в консоль */
    let result = a / b
    console.log(`Результат ділення: ` + result)
}
calcSum(6, 138)
/* ================================================================================================ */
/*
Задача №5
Створіть масив даних - 5 елементів, один з яких число 10
Обробіть масив за допомогою методу перебору
Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль
*/
let box = [10, `Діма`, 455, `Андрій`, 122]

/* Перебір масиву та перевірка на відповідність числу 10 */
box.forEach(function(element) {
    if (element === 10) {
        console.log(`Елемент присутній: ` + element)
    }
})
/* ================================================================================================ */
