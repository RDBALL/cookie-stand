'use strict';

let hours = ['6am','7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookieStore = document.getElementById('Seattle-total');

console.log(cookieStore);

// // returns random number betwwen or equal to minCust / maxCust
// function randCustomers(min, max){
//   return Math.floor(Math.random() * (max - min +1) + min);
// }

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


// let tokyo = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
// }
// let dubai = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
// }
// let paris = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
// }
// let lima = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
// }

// Class demo for lab
// let hours = ['6am', '7am', '8am'....'7pm']
//let seattle {
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
// }
