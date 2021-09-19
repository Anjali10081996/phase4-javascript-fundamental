//syntax 
//function functionName(){}

//non-parametrised function
function showMessage(){
  console.log("Hello user welcome to javascripst");
}
//parametrised
function dispalyMessage(name){
    console.log("My name is "+name);
}
//multi-para
function fetchContect(name , age,gender){
    console.log("My name is "+name+" age is "+age+" genger is "+gender);
    console.log(`my name is ${name} with age ${age} and gender ${gender}`);
}

//default parameter function
function getContent(name="Anjali", phone=9876543222){
    console.log(`Name is ${name} your phone number is ${phone}`);
}

showMessage();
dispalyMessage("Anjali");
dispalyMessage(); // as there is no type so we call JS as loosley type
fetchContect("Mike",25,"Male")
getContent("Mike",28987872);