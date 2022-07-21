'use strict';

let locationTable = document.getElementById('table');

let hours = ['6am','7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let locationTotal = [];

//------------Refactored Constructor------------

function Store(location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesArr = [];
  this.totalCookies = 0;
  this.hourlyTotalCookies = [];

  locationTotal.push(this);
}

//------------Methods to Prototypes------------

Store.prototype.randomCustNumber = function() {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.cookiesPerHour = function(){
  this.randomCustNumber();
  for (let i = 0; i < hours.length; i ++) {
    let cookies = (Math.ceil(this.avg * this.randomCustNumber()));
    console.log('cookies', cookies);
    this.cookiesArr.push(cookies);
    this.totalCookies += cookies;
  }
};

//------------Creating Table Header------------

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

//------------Creating Table Data------------

Store.prototype.render = function() {
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



//------------Creating Table Footer------------

function totalSalesFooter (){
  let footerElm = document.createElement('tfoot');
  locationTable.appendChild(footerElm);
  
  let newRow = document.createElement('tr');
  footerElm.appendChild(newRow);
  
  let tdElem = document.createElement('td');
  tdElem.textContent = 'Totals';
  newRow.appendChild(tdElem);
  
  let grandTotal = 0;
  
  for (let i = 0; i < hours.length; i++){
    let hourTotal = 0;
    for (let j = 0; j < locationTotal.length; j++){
      hourTotal += locationTotal[j].cookiesArr[i];
      grandTotal += locationTotal[j].cookiesArr[i];
    }
    let saleData = document.createElement('td');
    saleData.textContent = `${hourTotal}`;
    newRow.appendChild(saleData);
  }
  let totalSaleData = document.createElement('td');
  totalSaleData.textContent = grandTotal;
  newRow.appendChild(totalSaleData);
}
function renderTables() {
  for (let i = 0; i < locationTotal.length; i++) {
    locationTotal[i].render();
  }
}

// ------------Initiate Store Locations------------

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);


//------------Calling All Functions------------
header();
renderTables();
totalSalesFooter();
