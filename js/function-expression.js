function showMessage(){
    console.log("Hello user welcome to javascripst");
  }
  
  showMessage();
  
  //labelled function expression
  let printData = function printFn(){
   console.log("hello, sample function");
  }

  //anonymous function expression
  let makeData = function(){
    console.log("hello, anonymous function");
   }

     //anonymous function expression with param
  let buildData = function(name, age){
    console.log(`hello, anonymous function. your name is ${name} and age is ${age}`);
   } 
  printData();
  makeData();
  buildData("john",76);