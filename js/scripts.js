// business logic 
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}


Pizza.prototype.addToCost = function() {
  let cost = this.cost;
  if (this.size === "small") {
    cost += 8;
  } else if (this.size === "medium"){
    cost = 10;
  } else if (this.size === "large"){
    cost += 12;
}
    return cost;
};


Pizza.prototype.addToppings = function() {
  let cost = this.cost
if (this.toppings.includes("pepperoni")) {
  cost += 1;
};
if(this.toppings.includes("Anchovies")) {
cost += 1;
};
if(this.toppings.includes("Pineapple")) {
  cost += 1;
};
if(this.toppings.includes("Artichokes")) {
  cost += 1;
};
if(this.toppings.includes("Sausage")) {
  cost += 1;
};
if(this.toppings.includes("Bell Peppers")){
  cost += 1;
}; 
  return cost;
 
};

Pizza.prototype.addToppings = function (toppings) {
  this.toppings.push(toppings);
};



// UI




// console.log()
let newPizza = new Pizza ('large', ['Pineapple','Sausage'])
console.log(newPizza.addToppings());
console.log(newPizza.addToCost());





















// user interface logic


// window.addEventListener('submit', function(event){
//   document.getElementById('.pizzaOrder');
//   event.preventDefault()

// document.querySelector('.btn-order').addEventListener("click", function() {
  
// });

// });















// window.addEventListener('load', function (){
//   const form = document.getElementById('pizzaOrder');
//   form.addEventListener('submit', pizzaOrder);
// });

