// Starting numbers to add to objs

// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// Seattle	23	    65	              6.3
// Tokyo	  3	      24	              1.2
// Dubai	  11	    38	              3.7
// Paris	  20	    38	              2.3
// Lima	    2	      16	              4.6


let cookieSales = document.getElementById('salesTable');



// returns random number betwwen or equal to minCust / maxCust
function randCustomers(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust +1) + minCust);
}

let seattle = {
  minCust: 23,
  maxCust: 65,
  customers: 0,
  avgCookieSale: 6.3,
  getCust: function (){
    this.customers = `${randCustomers(minCust, maxCust)}`;
  },
  render: function(){
    let articleElem = document.createElement('article');
    salesTable.appendChild(articleElem);
  }
}

seattle.getCust();
console.log(seattle);
seattle.render();

let tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
}
let dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
}
let paris = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
}
let lima = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
}

