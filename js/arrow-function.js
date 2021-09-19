
  //anonymous function expression
  let makeData = function(){
    console.log("hello, anonymous function");
   }

   //arrow function
   let displayData= () =>{
       console.log("HEllo arrow function");
   }

   //arrow function in one line
   let oneLine= () =>    console.log("HEllo one line arrow function");

   //param to one line arrow function
   let oneLineFn = (name) => console.log("Hello, you name is " +name);

   makeData();
   displayData();
   oneLine()
   oneLineFn("Anjali")