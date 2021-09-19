//param construction
function Account(id,name,balance,email){
    this.id=id;
    this.name=name;
    this.balance=balance;
    this.email=email;
}

//modify account prototype
//object level inheritance
Account.prototype.state = "Jharkhand"
Account.prototype.Nationality = "Indian"

Account.prototype.showBalance = function(){
    return this.balance;
}

let account = new Account(101,"john", 878766,"xyz@gmail.com");
console.log(account);

let account2 = new Account(102,"john", 87664546,"xyz@gmail.com");
account2.bankName ="Pnb bank"; 
console.log(account2);

console.log(account.showBalance())
console.log(account.Nationality);
console.log(account.state);