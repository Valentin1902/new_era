// Завдання 5.
// const User = [`Ivan;Ivanov;1990;ivanov@gmail.com`];
// const [name, pastname, age, mail] = User[0].split(";");

// console.log(age, mail);

// Завдання 4.

// const project = {
//   Facebook: {
//     developer: {
//       Name: "Valik",
//       Pastname: "Pashchenko",
//       adress: {
//         Country: "Ukraine",
//         city: "Vinnitsa",
//       },
//     },
//   },
// };

// const {
//   Facebook: {
//     developer: {
//       adress: { Country, city },
//     },
//   },
// } = project;

// console.log(Country, city);

// Завдання 6.
// function Phone(brand, model, price, color) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   this.color = color;
// }

// const phone1 = new Phone("Samsung", "x100", 13500, "червоний");
// const phone2 = new Phone("Apple", "iPhone 14", 30000, "чорний");
// const phone3 = new Phone("Xiaomi", "Mi 11", 19000, "синій");

// Phone.prototype.toString = function () {
//   return `Бренд: ${this.brand}, Модель: ${this.model}, Ціна: ${this.price} грн, Колір: ${this.color}`;
// };

// console.log(phone1.toString());
// console.log(phone2.toString());
// console.log(phone3.toString());

// Завдання 8

// const users = [
//   { firstName: "Petro", lastName: "Petrov" },
//   { firstName: "Misha", lastName: "Ivanov" },
//   { firstName: "Anna", lastName: "Vasilivna" },
// ];

// const updatedUsers = users.map((user) => ({
//   ...user,
//   isSelected: false,
// }));

// console.log(updatedUsers);
