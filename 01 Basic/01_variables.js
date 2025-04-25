const accountId = 114500010076; //const -> constant variable 
let accountEmail = "mayurpawar@gmail.com";
var accountPassword = "1234"; 
accountCity="Hyderabad";

//accountId=5; // reassign not allow in case of const

console.log(accountId);

// console.table([var1,var2,...]); to print multiple variable values in console
console.table([accountEmail,accountPassword,accountCity]); 

/*
Prefer not to use var, because of issue in block scope and functional scope
instead of var use let 
*/

let accountState; // output -> undefined
console.log(accountState);