const accountId = 12345;
let accountEmail = "niteesh@gmail.com";
var accountPassword = "12345";
accountCity = "Bangalore";

// accountId=2;

accountEmail = "hc@gmail.com";
accountPassword = "67890";
accountCity = "Mumbai";
console.log(accountId);
let accountSate;
/*
Prefrered not to use var
because of issue in block scope and function scope
 */
console.table([accountEmail, accountPassword, accountCity, accountSate]);
