'use strict';

let hours = ['6am','7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookieStore = document.getElementById('Seattle-total');

console.log(cookieStore);

// Seattle Section

let Seattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  Avg: 6.3,
  cookiesArr: [],
  totalCookies: 0,
  randomCustNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPerHour: function () {

    for (let i = 0; i < hours.length; i++) {
      let cookies = (Math.ceil(this.Avg * this.randomCustNumber()))
      this.cookiesArr.push(cookies);
      this.totalCookies += cookies
    }
  },
  render: function () {
    this.cookiesPerHour();
    let storeName = document.createElement('h3');
    storeName.textContent = this.location; 
    cookieStore.appendChild(storeName);
    let ulElem = document.createElement('ul');
    cookieStore.appendChild(ulElem);

    for (let i = 0; i < this.cookiesArr.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = hours[i] + ': ' + this.cookiesArr[i] + ' cookies';
      ulElem.appendChild(liElem);
      console.log('total: ', this.totalCookies);
    }
    let totalElm = document.createElement('li');
    totalElm.textContent = `total: ${this.totalCookies} cookies`;
    ulElem.appendChild(totalElm);
  }
};

Seattle.render();
console.log(Seattle);

// Tokyo Section

let Tokyo = {
  location: 'Tokyo',
  min: 3,
  max: 24,
  Avg: 1.2,
  cookiesArr: [],
  totalCookies: 0,
  randomCustNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesPerHour: function () {

    for (let i = 0; i < hours.length; i++) {
      let cookies = (Math.ceil(this.Avg * this.randomCustNumber()))
      this.cookiesArr.push(cookies);
      this.totalCookies += cookies
    }
  },
  render: function () {
    this.cookiesPerHour();
    let storeName = document.createElement('h3');
    storeName.textContent = this.location; 
    cookieStore.appendChild(storeName);
    let ulElem = document.createElement('ul');
    cookieStore.appendChild(ulElem);

    for (let i = 0; i < this.cookiesArr.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = hours[i] + ': ' + this.cookiesArr[i] + ' cookies';
      ulElem.appendChild(liElem);
      console.log('total: ', this.totalCookies);
    }
    let totalElm = document.createElement('li');
    totalElm.textContent = `total: ${this.totalCookies} cookies`;
    ulElem.appendChild(totalElm);
  }
};

Tokyo.render();
console.log(Tokyo);

// let dubai = {
//   min: 11,
//   max: 38,
//   Avg: 3.7,
// }
// let paris = {
//   min: 20,
//   max: 38,
//   Avg: 2.3,
// }
// let lima = {
//   min: 2,
//   max: 16,
//   Avg: 4.6,
// }