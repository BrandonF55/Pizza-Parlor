// business logic 
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
  this.pizzaArray = [];
}



Pizza.prototype.addToCost = function() {
  //let cost = this.cost;
  if (this.size === "small") {
    this.cost += 8;
  } else if (this.size === "medium"){
    this.cost = 10;
  } else if (this.size === "large"){
    this.cost += 12;
}
    return this.cost;
};




Pizza.prototype.addToppings = function () {
  this.cost.push += (this.toppings.length * 1);

  return this.cost;
};



// UI logic 
  function displayPizza() {
    const pizzaSize = document.querySelector('input[type=radio]:checked').value;
    const pizzaToppings = document.querySelector('input[type=checkbox]:checked').value;
    const newPizza = new Pizza (pizzaSize, pizzaToppings);
     
    for (let i = 0; i< pizzaToppings.length; i++){
      newPizza.pizzaArray.push(pizzaToppings[i].value)
      
    }

    newPizza.addToCost();
    document.querySelector("#tartget").innerHTML = newPizza.cost;
      newPizza.addToppings();
         console.log(newPizza)
    }
   
  window.addEventListener("load", function() {
  const form = document.getElementById('pizzaOrder');
   form.addEventListener('submit', function(event) {
     event.preventDefault();
    document.querySelector('#btn-order').addEventListener("click", displayPizza());
     
   });
   });


  
   
