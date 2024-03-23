'use strict';
const profile = {
    username: "Jacob",
  playTime: 300,
changeUsername(newName) {
    this.username = newName;
},
updatePlayTime(hours) {
this.playTime += hours;
},
getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
},
}

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

//task-1
// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
  
//   const result = makePizza();
//   const pointer = makePizza;
//   console.log(result); 
//   console.log(pointer); 

  ///task-2
  function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
    
  }
  
  function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;

  }
  
  function makeMessage(pizzaName, callback) {
    return callback(pizzaName);
    
  }
  console.log(makeMessage("Royal Grand", makePizza)); 
  console.log(makeMessage("Ultracheese", deliverPizza)); 

 ///task-3
//  function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     return callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}`);
//   });
  
//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
//   });

  ///task-4
  function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
  
    orderedItems.forEach(item =>totalPrice += item);
  
    return totalPrice;
  }
  console.log(calculateTotalPrice([12, 85, 37, 4]));
  console.log(calculateTotalPrice([164, 48, 291]));
  console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
  
///task-5
function filterArray(numbers, value) {
  let filterGroup = [];
  numbers.forEach((number) => {
    if (number >value) { 
  
     filterGroup.push(number);
    }
});

return filterGroup;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));


///task-6
calculateTotalPrice = (quantity, pricePerItem) => {
    return quantity * pricePerItem;
  }
  console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));

///task-7
function filterArray(numbers, value) {
    const filteredNumbers = [];
  
    numbers.forEach(function (number) {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    return filteredNumbers;
  }
  console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

///task-8
function changeEven(numbers, value) {
    let array = [];

    numbers.forEach((number) => {
    if (number % 2 !== 0) {
      } 
      else {
        number += value;
      } 
      array.push(number);
      });

    return array;

  }

console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map(planet => planet.length);

console.log(planetsLengths);


//task
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
  
//   const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
//   const booksByAuthor = books.filter(book => { 
//     if (book.author.includes(AUTHOR)) 
//     return book.author;});

//   console.table(topRatedBooks);
//   console.log(booksByAuthor);

  ///task
/* onst users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male"
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female"
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female"
    }
  ]
  const getUsersWithEyeColor = (users, color) => 
  {users.filter(user => user.eyeColor === color);};

  console.log(getUsersWithEyeColor(users, "blue"));
  console.log(getUsersWithEyeColor(users, "green"));
  console.log(getUsersWithEyeColor(users, "brown"));
 */

  ///task
//  const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ]

//   const getUserWithEmail = (users, email) => 
//   users.find(user => user.email === email);

//   console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
//   console.log(getUserWithEmail(users, "elmahead@omatom.com"));
//   console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));
//   console.log(getUserWithEmail(users, ));

  const users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male"
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female"
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female"
    }
  ]

  const isEveryUserActive = (users) => 
  { return users.every(user => user.isActive === true)};

  console.log(isEveryUserActive(users));


  ////task
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    {
      title: "The Dreams in the Witch House",
      author: "Howard Lovecraft",
      rating: 8.67,
    },
  ];
  const MIN_BOOK_RATING = 8;
  
  const names = books.filter((book) => 
        book.rating > MIN_BOOK_RATING).map(book => book.author).toSorted((a, b) => 
        a.localeCompare(b));
  console.log(names);