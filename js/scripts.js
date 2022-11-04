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





// UI logic 
   const form = document.getElementById('pizza-order');
   form.addEventListener('submit', function(event) {
    event.preventDefault()

  });
  function displayPizza(event) {
    event.preventDefault();
    const pizzaSize = document.querySelector("#choosePizzaSize").value;
    const pizzaToppings = document.querySelector("#chooseToppings").value;
    let newPizza = new Pizza (pizzaSize, pizzaToppings)
   

  }




// console.log()
