//non-parametrised constructor
function Person(){};

//one param constructor
function Student(name){
    this.name=name;
}

//param construction
function Account(id,name,balance,email){
    this.id=id;
    this.name=name;
    this.balance=balance;
    this.email=email;
}

//create object
let person = new Person();
console.log(person)

//create student object
let student = new Student("Mike");
let student2= new Student("Don");
console.log(student);
console.log(student2);

//create account object
let account = new Account(101,"mike",32873827,"xy@gmail.com")
let account2 = new Account(102,"John",23242 )
let account3 = new Account(103,"farah",32873827,"xy@gmail.com")
console.log(account);
console.log(account2);
console.log(account3);