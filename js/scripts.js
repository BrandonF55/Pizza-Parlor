// business logic 
function Pizza(size, toppings) {
  this.size = size;
  this.toppings =toppings;
  this.cost = cost;
}

Pizza.prototype.addToCost = function() { 
  let cost = cost;
  if (this.size === "small") {
    this.cost += 8;
  } else if (this.size === "medium"){
    this.cost = 10;
  } else if (this.size === "large"){
    this.cost += 12;
}
if (this.toppings.includes("pepperoni")) {
  this.cost += 1;
};
if(this.toppings.includes("Anchovies")) {
this.cost += 1;
};
if(this.toppings.includes("Pineapple")) {
  this.cost += 1;
};
if(this.toppings.includes("Artichokes")) {
this.cost += 1;
};
if(this.toppings.includes("Sausage")) {
  this.cost += 1;
};
if(this.toppings.includes("Bell Peppers")){
  this.cost += 1;
};
  return this.cost;
}


Pizza.prototype.addTop = function(topping) {
  this.toppings.push(topping);
}


// user interface logic
// window.addEventListener('submit', function(){
//   document.getElementById('.pizzaOrder');
//   form.addEventListener()
// });













// window.addEventListener('load', function (){
//   const form = document.getElementById('pizzaOrder');
//   form.addEventListener('submit', pizzaOrder);
// });

