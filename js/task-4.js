// Вот несколько задач для тренировки перебирающих методов (map, filter, reduce, forEach и т.д.) в JavaScript:

// 1. Список квадратов чисел
// У вас есть массив чисел: [1, 2, 3, 4, 5]. Используя метод map, создайте новый массив, где каждое число возведено в квадрат.
// const numbers = [1, 2, 3, 4, 5];
// const numbersPower = numbers.map(number => number ** 2
// );
// console.log(numbersPower);

// 2. Фильтрация по длине строки
// Дан массив строк: ["apple", "banana", "cherry", "date", "kiwi"]. Используя метод filter, оставьте только те строки, длина которых больше 5 символов.
// const fruits = ["apple", "banana", "cherry", "date", "kiwi"];
// const fruitsFilter = fruits.filter(fruit => fruit.length >= 5);
// console.log(fruitsFilter)

// 3. Сумма чисел
// Дан массив чисел: [10, 20, 30, 40, 50]. Используя метод reduce, найдите сумму всех чисел в массиве.

// const numbers = [10, 20, 30, 40, 50];
// const sumNumbers = numbers.reduce((acc, number) => acc + number, 0);
// console.log(sumNumbers)

// 4. Подсчёт количества чётных чисел
// Дан массив чисел: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Используя методы filter и length, посчитайте, сколько в массиве чётных чисел.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numerEvenNumbers = numbers.filter(number => number % 2 === 0).length
// const numerEvenNumbers = numbers.reduce((acc, number) => number % 2 === 0 ? acc + 1 : acc,0)
// console.log(numerEvenNumbers)

// 5. Конкатенация строк
// Дан массив строк: ["Hello", "world", "this", "is", "JavaScript"]. Используя метод reduce, объедините все строки в одну, разделив их пробелами.
// const lines = ["Hello", "world", "this", "is", "JavaScript"];
// const allLines = lines.reduce((acc, line) => acc + " " + line)
// console.log(allLines)

// 6. Массив уникальных значений
// Дан массив: [1, 2, 2, 3, 4, 4, 5, 6, 6, 7]. Используя метод reduce, создайте массив, содержащий только уникальные значения.
// const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
// const uniqueNum = numbers.reduce((acc, number) => acc.includes(number) ? acc : [...acc, number], [])
// console.log(uniqueNum)

// 7. Модификация объектов
// Дан массив объектов:

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];
// const updatedUsers = users.map(user => ({...user, age: user.age + 5}))
// console.log(updatedUsers)
// Используя метод map, увеличьте возраст каждого пользователя на 5 лет.


// 8. Сумма только положительных чисел
// Дан массив чисел: [-10, 20, -30, 40, -50, 60]. Используя методы filter и reduce, найдите сумму только положительных чисел.
// const numbers = [-10, 20, -30, 40, -50, 60];
// const sumPositivNumbers = numbers.filter(number => number >= 0).reduce((acc, number) => acc + number, 0);
// console.log(sumPositivNumbers)

// 9. Группировка по чётности
// Дан массив чисел: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Используя метод reduce, сгруппируйте числа в объект по чётным и нечётным:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newObject = numbers.reduce((acc, number) =>
//    { number % 2 === 0 ? acc.even.push(number) : acc.odd.push(number); return acc }, { even: [], odd: [] })
// console.log(newObject)

// {
//   odd: [1, 3, 5, 7, 9],
//   even: [2, 4, 6, 8, 10]
// }


// 10. Подсчёт символов
// Дан массив строк: ["apple", "banana", "cherry"]. Используя метод reduce, подсчитайте общее количество символов во всех строках массива.

// const fruits = ["apple", "banana", "cherry"];
// const allSimbol = fruits.reduce((acc, fruit) => acc + fruit.length, 0)
// console.log(allSimbol)

// Задача:
// Есть массив объектов пользователей, каждый объект содержит имя (name) и возраст (age). Нужно:
// 1. Отсортировать пользователей по возрасту.
// 2. Затем отфильтровать только тех, кто старше 18 лет.
// 3. Для оставшихся пользователей создать новый массив, где каждый объект будет содержать только имя и возраст (без лишних данных).
// 4. Результат должен быть отсортирован по имени в алфавитном порядке.
const users = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 17, city: "Los Angeles" },
  { name: "Charlie", age: 30, city: "Chicago" },
  { name: "David", age: 19, city: "San Francisco" },
  { name: "Eve", age: 22, city: "Boston" }
];

const usersByAge = users.toSorted((a, b) => a.age - b.age).filter(user => user.age >= 18).map(user => ({name: user.name, age: user.age})).toSorted((a,b) => a.name.localeCompare(b.name))
console.log(usersByAge)