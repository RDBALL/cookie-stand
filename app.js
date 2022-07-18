'use strict';

let hours = ['6am','7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookieStore = document.getElementById('stores');


// returns random number betwwen or equal to minCust / maxCust
function randCustomers(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}

let Seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  customers: 0,
  cookies: 0,
  getCust: function (){
    this.customers = randCustomers(this.minCust, this.maxCust);
  },
  cookieTotal: function(totalCookies){
    return Math.round(totalCookies * this.avgCookieSale);
  },
  render: function(){
    let ulElem = document.createElement('ul');
    ulElem.textContent = this.location;
    cookieStore.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++){
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${hours[i]}: ${this.cookieTotal(this.customers)} cookies`;
      this.cookies += this.cookieTotal(this.customers);
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.cookies} Cookies`;
    ulElem.appendChild(liElem);
  }
};

Seattle.render();
console.log(Seattle);


    // let pElem = document.createElement('p');
    // pElem.textContent = 
  


// // seattle.getCust();
// // console.log(seattle);
// // seattle.render();

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
