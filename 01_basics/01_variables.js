// unchangable
const accountId = 144553

// don't use var as issue in block scope and functional scope
let accountEmail = "ayush@gmail.com"
var accountPassword = "12345"

accountCity = "Renukoot"

// remains undefined
let accountState;

// accountId = 2 (not allowed)
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])