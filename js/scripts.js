// business logic 
function Pizza(size, toppings, cost) {
  this.size = size;
  this.toppings =toppings;
  this.cost = 0;
}

Pizza.prototype.addToCost = function() { 
  if (this.size === "small") {
    this.cost += 8;
  } else if (this.size === "medium"){
    this.cost = 10;
  } else if (this.size === "large"){
    this.cost += 12;
    }else (this.size === "familySize"){
    this.cost += 14;
    };
  };


  Pizza.prototype.addToppings = function(toppings){
    this.toppings.push(toppings);

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
  
   console.log(this.cost);
};  
} 

// User Interface Logic


// window.addEventListener("load", function () {

//   document.querySelector(".orderTotoal").addEventListener("click", ());
