// // // Tasks: Objects

// //  1. Створити об'єкт customer, що містить такі властивості:

// Create object
const customer = {
  firstName: "Andrey",
  lastName: "Gonchar",
  email: "andrewturenko@gmail.com",
  password: "Ghost55",
  phoneNumber: "+380732002020",
  address: {
    city: "Lozova",
    street: "Sonyachna",
    house: "6",
    apartment: 32,
  },
  // methods
  outputAddress() {
    return `${this.address}`;
  },
  changePhone(newNumber) {
    this.phone = newNumber;
  },
};

const outAddress = customer.outputAddress();
console.log(outAddress);

customer.changePhone("+380999999999");
console.log("customer :>> ", customer);

// add
customer.isMale = true;

// delete
delete customer.address;

// copy
const customerCopy1 = Object.assign({}, customer);
console.log(customerCopy1 === customer);

const customerCopy2 = { ...customer };
console.log(customerCopy2 === customer);

// //  2. Перебрати і вивести властивості об'єкту cat

const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};
for (let property in cat) {
  console.log(`cat: ${property} = ${cat[property]}`);
}

// //  3. Створити функцію-конструктор для створення об'єктів книг з властивостями:

function Book(author, bookName, yearOfPublication, publisher, price) {
  this.author = author;
  this.title = bookName;
  this.year = yearOfPublication;
  this.publisher = publisher;
  this.price = price;
  this.ageOfBook = function () {
    return 2023 - this.year;
  };
  this.changePrice = function (newPrice) {
    this.price = newPrice;
  };
}

const bookshop = new Book(
  "Faradey Varshavskiy",
  "Unreal world",
  2018,
  {
    city: "Lviv",
    bookName: "The old lion",
  },
  "388$"
);
console.log("bookshop :>> ", bookshop);

const ageOfBook = bookshop.ageOfBook();
console.log(`Age of book : ${ageOfBook}`);

bookshop.changePrice("194$");
console.log("-50% off: New price :>> ", bookshop.price);
