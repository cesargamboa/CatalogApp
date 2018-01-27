//list of objects
var items = [{ Game: "Residen Evil", Price: 30 }, { Game: "God of War", Price: 30 }, { Game: "Mass Effect", Price: 24 },
{ Game: "Fallen", Price: 14 }, { Game: "Watch Dogs 2", Price: 31 }, { Game: "UFC 2018", Price: 24 }, { Game: "BattleField 1", Price: 20 }];
var total = 0;
itemVal = 0;
var creditCard = false;
window.localStorage.setItem("creditCard", creditCard);

var array = [];
var array1 = [];

//Activate the addValue function
function start() { addValue(0); }
function start1() { addValue(1); }
function start2() { addValue(2); }
function start3() { addValue(3); }
function start4() { addValue(4); }
function start5() { addValue(5); }
function start6() { addValue(6); }

//Create the output using parameters from start
function addValue(a) {
  var cartCounter=(document.getElementById("counter"));


  var x =(document.getElementById("shopcart"));


  x.innerHTML += "<tr class=" + "table-dark" + "><td>" + items[a].Game + "</td>" + "<td>$" + items[a].Price + "</td></tr>";
 cartCounter.innerHTML+=1;

  //create summary
  array[a] = items[a].Game;
  array1[a] = items[a].Price;
  var summary = [array];
  var summary1 = [array1];

  window.localStorage.setItem("summary", summary);
  window.localStorage.setItem("summary1", summary1);



  //send info to create total
  sum(items[a].Price);
}
//keep the total of the price while adding items
function sum(y) {
  var z = document.getElementById("result");
  var x = (Number)(y);
  total = total + x;
  z.innerHTML = (total);
  //storage total
  var storageVar = total;
  window.localStorage.setItem("storageVar", storageVar);



}
//Erase content of the cart
function emptyCart() {

  z.innerHTML = "";
  x.innerHTML = "";
  total = 0;
  //change payment options
}
function addOptionsCreditCard() {
  creditCard = true;
  document.getElementById("payment").className = "form-group";
  window.localStorage.setItem("creditCard", creditCard);

} function addOptionsPayPal() {
  document.getElementById("payment").className = "form-group hidden";
  creditCard = false;
  window.localStorage.setItem("creditCard", creditCard);
}

//navigate to shopping bag using js
function summary() {
  var movetoCheck = window.location.href = "checkout.html";

}
//print summary
function seeIt() {
  /*var sumar=document.getElementById("summary");
  sumar.innerHTML="El Total de la Compra es "+window.localStorage.getItem("storageVar");*/
  var noMore = window.localStorage.getItem("summary");
  var noMore1 = window.localStorage.getItem("summary1");
  var tot = window.localStorage.getItem("storageVar");




  //create an array with the string values
  var newMore = noMore.split(",");
  var newMore1 = noMore1.split(",");
  var cont = newMore.length;
  console.log(cont);
  //create table using length
  for (var i = 0; i < cont; i++) {
    var p = document.getElementById("shopcart1");
    p.innerHTML += "<tr class=" + "table-dark" + "><td>" + newMore[i] + "</td>" + "<td>$" + newMore1[i] + "</td></tr>";
    console.log(i);
  }

  document.getElementById("result").innerHTML = tot;
  //show payment button
  document.getElementById("payme").className = "btn btn-info";
  document.getElementById("printMe").className = "btn btn-info";


}

function confirm() {

  alert("CONGRATULATIONS! THE PURCHASED IS COMPLETED");
  window.location.href = "index.html";
}
function printBill() {

  window.print();

}






