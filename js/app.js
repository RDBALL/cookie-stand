'use strict';

let locationTable = document.getElementById('table');

let hours = ['6am','7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let locationTotal = [];

// Starting with a constructor

function StoreLocation(location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesArr = [];
  this.totalCookies = 0;

  locationTotal.push(this);
}

// Creating Prototypes

StoreLocation.prototype.randomCustNumber = function() {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

StoreLocation.prototype.cookiesPerHour = function(){
  for (let i = 0; i < hours.length; i ++) {
    let cookies = (Math.ceil(this.avg * this.randomCustNumber()));
    console.log('cookies', cookies);
    this.cookiesArr.push(cookies);
    this.totalCookies += cookies;
  }
};

// Identifying data to add to table

StoreLocation.prototype.render = function() {
  this.cookiesPerHour();
  let row1 = document.createElement('tr');
  locationTable.appendChild(row1);

  let tdElem = document.createElement('td');
  tdElem.textContent = this.location;
  row1.appendChild (tdElem);

  for (let i =0; i < this.cookiesArr.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesArr[i];
    row1.appendChild(td);
    console.log('total: ', this.totalCookies);
  }
  let totalElm = document.createElement('td');
  totalElm.textContent = this.totalCookies;
  row1.appendChild(totalElm);
};

function header () {
  let tableHead = document.createElement ('thead');
  locationTable.appendChild(tableHead);

  let row = document.createElement('tr');
  tableHead.appendChild(row);

  let tdElem = document.createElement('td');
  row.appendChild(tdElem);

  for (let i = 0; i < hours.length; i++){
    let td = document.createElement('td');
    td.textContent = hours[i];
    row.appendChild(td);
  }
  let total = document.createElement('td');
  total.textContent = 'Total';
  row.appendChild(total);
}

header();

// Store locations

new StoreLocation('Seattle', 23, 65, 6.3);
new StoreLocation('Tokyo', 3, 24, 1.2);
new StoreLocation('Dubai', 11, 38, 3.7);
new StoreLocation('Paris', 20, 38, 2.3);
new StoreLocation('Lima', 2, 16, 4.6);

// Render Tables

function renderTables() {
  for (let i = 0; i < locationTotal.length; i++) {
    locationTotal[i].render();
  }
}

renderTables();



// Class 06 code that was refactored to above ^^^^ code

// let Seattle = {
//   location: 'Seattle',
//   min: 23,
//   max: 65,
//   Avg: 6.3,
//   cookiesArr: [],
//   totalCookies: 0,
//   randomCustNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesPerHour: function () {

//     for (let i = 0; i < hours.length; i++) {
//       let cookies = (Math.ceil(this.Avg * this.randomCustNumber()));
//       this.cookiesArr.push(cookies);
//       this.totalCookies += cookies;
//     }
//   },
//   render: function () {
//     let cookieStore = document.getElementById('Seattle-total');
//     this.cookiesPerHour();
//     let storeName = document.createElement('h3');
//     storeName.textContent = this.location;
//     cookieStore.appendChild(storeName);
//     let ulElem = document.createElement('ul');
//     cookieStore.appendChild(ulElem);

//     for (let i = 0; i < this.cookiesArr.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] + ': ' + this.cookiesArr[i] + ' cookies';
//       ulElem.appendChild(liElem);
//       console.log('total: ', this.totalCookies);
//     }
//     let totalElm = document.createElement('li');
//     totalElm.textContent = `total: ${this.totalCookies} cookies`;
//     ulElem.appendChild(totalElm);
//   }
// };

// Seattle.render();
// console.log(Seattle);

// // Tokyo Section

// let Tokyo = {
//   location: 'Tokyo',
//   min: 3,
//   max: 24,
//   Avg: 1.2,
//   cookiesArr: [],
//   totalCookies: 0,
//   randomCustNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesPerHour: function () {

//     for (let i = 0; i < hours.length; i++) {
//       let cookies = (Math.ceil(this.Avg * this.randomCustNumber()));
//       this.cookiesArr.push(cookies);
//       this.totalCookies += cookies;
//     }
//   },
//   render: function () {
//     let cookieStore = document.getElementById('Tokyo-total');
//     this.cookiesPerHour();
//     let storeName = document.createElement('h3');
//     storeName.textContent = this.location;
//     cookieStore.appendChild(storeName);
//     let ulElem = document.createElement('ul');
//     cookieStore.appendChild(ulElem);

//     for (let i = 0; i < this.cookiesArr.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] + ': ' + this.cookiesArr[i] + ' cookies';
//       ulElem.appendChild(liElem);
//       console.log('total: ', this.totalCookies);
//     }
//     let totalElm = document.createElement('li');
//     totalElm.textContent = `total: ${this.totalCookies} cookies`;
//     ulElem.appendChild(totalElm);
//   }
// };

// Tokyo.render();
// console.log(Tokyo);

// // Dubai Section

// let Dubai = {
//   location: 'Dubai',
//   min: 11,
//   max: 38,
//   Avg: 3.7,
//   cookiesArr: [],
//   totalCookies: 0,
//   randomCustNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesPerHour: function () {

//     for (let i = 0; i < hours.length; i++) {
//       let cookies = (Math.ceil(this.Avg * this.randomCustNumber()));
//       this.cookiesArr.push(cookies);
//       this.totalCookies += cookies;
//     }
//   },
//   render: function () {
//     let cookieStore = document.getElementById('Dubai-total');
//     this.cookiesPerHour();
//     let storeName = document.createElement('h3');
//     storeName.textContent = this.location;
//     cookieStore.appendChild(storeName);
//     let ulElem = document.createElement('ul');
//     cookieStore.appendChild(ulElem);

//     for (let i = 0; i < this.cookiesArr.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] + ': ' + this.cookiesArr[i] + ' cookies';
//       ulElem.appendChild(liElem);
//       console.log('total: ', this.totalCookies);
//     }
//     let totalElm = document.createElement('li');
//     totalElm.textContent = `total: ${this.totalCookies} cookies`;
//     ulElem.appendChild(totalElm);
//   }
// };

// Dubai.render();
// console.log(Dubai);

// // Paris Section

// let Paris = {
//   location: 'Paris',
//   min: 20,
//   max: 38,
//   Avg: 2.3,
//   cookiesArr: [],
//   totalCookies: 0,
//   randomCustNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesPerHour: function () {

//     for (let i = 0; i < hours.length; i++) {
//       let cookies = (Math.ceil(this.Avg * this.randomCustNumber()));
//       this.cookiesArr.push(cookies);
//       this.totalCookies += cookies;
//     }
//   },
//   render: function () {
//     let cookieStore = document.getElementById('Paris-total');
//     this.cookiesPerHour();
//     let storeName = document.createElement('h3');
//     storeName.textContent = this.location;
//     cookieStore.appendChild(storeName);
//     let ulElem = document.createElement('ul');
//     cookieStore.appendChild(ulElem);

//     for (let i = 0; i < this.cookiesArr.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] + ': ' + this.cookiesArr[i] + ' cookies';
//       ulElem.appendChild(liElem);
//       console.log('total: ', this.totalCookies);
//     }
//     let totalElm = document.createElement('li');
//     totalElm.textContent = `total: ${this.totalCookies} cookies`;
//     ulElem.appendChild(totalElm);
//   }
// };

// Paris.render();
// console.log(Paris);

// // Lima Section

// let Lima = {
//   location: 'Lima',
//   min: 2,
//   max: 16,
//   Avg: 4.6,
//   cookiesArr: [],
//   totalCookies: 0,
//   randomCustNumber: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesPerHour: function () {

//     for (let i = 0; i < hours.length; i++) {
//       let cookies = (Math.ceil(this.Avg * this.randomCustNumber()));
//       this.cookiesArr.push(cookies);
//       this.totalCookies += cookies;
//     }
//   },
//   render: function () {
//     let cookieStore = document.getElementById('Lima-total');
//     this.cookiesPerHour();
//     let storeName = document.createElement('h3');
//     storeName.textContent = this.location;
//     cookieStore.appendChild(storeName);
//     let ulElem = document.createElement('ul');
//     cookieStore.appendChild(ulElem);

//     for (let i = 0; i < this.cookiesArr.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = hours[i] + ': ' + this.cookiesArr[i] + ' cookies';
//       ulElem.appendChild(liElem);
//       console.log('total: ', this.totalCookies);
//     }
//     let totalElm = document.createElement('li');
//     totalElm.textContent = `total: ${this.totalCookies} cookies`;
//     ulElem.appendChild(totalElm);
//   }
// };

// Lima.render();
// console.log(Lima);
