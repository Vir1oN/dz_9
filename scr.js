// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту

// function Div()
// {
//     this.title = 'div';
//     this.action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого ';
//     this.attributes = [
//         {
//         attrTitle: 'align',
//         attrAction: 'Задает выравнивание содержимого тега <div>',
//         },
//         {
//         attrTitle: 'title',
//         attrAction: 'Добавляет всплывающую подсказку к содержимому.',
//         }
//     ];
// }
//
// let newDiv = new Div();
// console.log(newDiv);


// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function Car(make = 'volvo', developer = 'gabe', year = 2015, maxSpeed = 300,
//              engineVolume = 500) {
//     this._make = make;
//     this._developer = developer;
//     this._year = year;
//     this._maxSpeed = maxSpeed;
//     this._engineVolume = engineVolume;
//     this.drive = function () {
//         console.log('We are driving at ' + this._maxSpeed + ' miles per hour!');
//     }
//
//     this.info = function () {
//         console.log(this);
//     }
//     this.increaseMaxSpeed = function (newSpeed)
//     {
//         this._maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue)
//     {
//         this._year = newValue;
//     }
//     this.addDriver = function (driver)
//     {
//         this._driver = driver;
//     }
// }
// let myCar = new Car();
// myCar.info();
// myCar.changeYear(2017);
// myCar.increaseMaxSpeed(30);
// myCar.addDriver({name: 'Taras', age: 18});
// myCar.info();

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// class Car
// {
//     constructor(make = 'volvo', developer = 'gabe', year = 2015, maxSpeed = 300,
//                 engineVolume = 500) {
//         this._make = make;
//         this._developer = developer;
//         this._year = year;
//         this._maxSpeed = maxSpeed;
//         this._engineVolume = engineVolume;
//     }
//
//     drive() {
//         console.log('We are driving at ' + this._maxSpeed + ' miles per hour!');
//     }
//     info() {
//         console.log(this);
//     }
//     increaseMaxSpeed(newSpeed)
//     {
//         this._maxSpeed += newSpeed;
//     }
//     changeYear(newValue)
//     {
//         this._year = newValue;
//     }
//     addDriver(driver)
//     {
//         this._driver = driver;
//     }
// }
//
// let myCar = new Car();
// myCar.info();
// myCar.changeYear(2017);
// myCar.increaseMaxSpeed(30);
// myCar.addDriver({name: 'Taras', age: 18});
// myCar.info();

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class Cinderella {
//     constructor(name, age, footSize) {
//         this._name = name;
//         this._age = age;
//         this._footSize = footSize;
//     }
// }
// class Prince {
//     constructor(name, age, foundFootSize) {
//         this._name = name;
//         this._age = age;
//         this._foundFootSize = foundFootSize;
//     }
//     CinderellaFound(cinderella)
//     {
//         this._cinderella = cinderella;
//         console.log(this._cinderella);
//     }
// }
//
// let prince = new Prince('Iranon', 22, 35);
// let candidates = [];
// for (let i = 0; i < 10; i++) {
//     candidates.push(new Cinderella('of no importance', i * 5, i + 30));
// }
// for (let candidate of candidates) {
//     if (prince._foundFootSize === candidate._footSize)
//     {
//         prince.CinderellaFound(candidate);
//         break;
//     }
// }
// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// function Cinderella(name, age, footSize) {
//         this._name = name;
//         this._age = age;
//         this._footSize = footSize;
// }
//
// function Prince(name, age, foundFootSize) {
//     this._name = name;
//     this._age = age;
//     this._foundFootSize = foundFootSize;
//     this.CinderellaFound = function (cinderella) {
//         this._cinderella = cinderella;
//         console.log(this._cinderella);
//     }
// }
//
// let prince = new Prince('Iranon', 22, 35);
// let candidates = [];
// for (let i = 0; i < 10; i++) {
//     candidates.push(new Cinderella('of no importance', i * 5, i + 30));
// }
// for (let candidate of candidates) {
//     if (prince._foundFootSize === candidate._footSize)
//     {
//         prince.CinderellaFound(candidate);
//         break;
//     }
// }