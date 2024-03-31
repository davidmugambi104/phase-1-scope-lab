// Write your solution in this file!
var customerName = 'bob'; // Declare and assign 'bob' to customerName in global scope

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); // Accesses global customerName and uppercases it
}

function setBestCustomer() {
    bestCustomer = 'not bob'; // Declares bestCustomer in global scope and assigns 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Modifies bestCustomer in global scope to 'maybe bob'
}

const leastFavoriteCustomer = 'someone'; // Declare leastFavoriteCustomer as a constant in global scope

function changeLeastFavoriteCustomer() {
    //reassign a constant should result in an error
    leastFavoriteCustomer = 'someone else'; 
}
