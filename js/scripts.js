// business logic 
function Pizza(size, toppings) {
  this.size = size;
  this.toppings =toppings;
  this.cost = 0;
}

const size = small


Pizza.prototype.addToCost = function() {
  this.cost = cost;
  if (this.size === "small") {
    this.cost += 8;
  } else if (this.size === "medium"){
    this.cost = 10;
  } else if (this.size === "large"){
    this.cost += 12;
}

Pizza.prototype.addToppings = function(toppings) {
  this.toppings = toppings
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
}

console.log(toppings);
// user interface logic


window.addEventListener('submit', function(event){
  document.getElementById('.pizzaOrder');
  event.preventDefault()

document.querySelector('.btn-order').addEventListener("click", function() {
  
});

});















// window.addEventListener('load', function (){
//   const form = document.getElementById('pizzaOrder');
//   form.addEventListener('submit', pizzaOrder);
// });

