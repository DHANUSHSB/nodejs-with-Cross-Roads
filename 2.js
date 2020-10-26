var read = require("readline-sync");
console.log("enter two numbers");
var i = read.question("enter first number: ");
var n = read.question("enter 2nd number: ");
if(i<n){
    console.log(i.concat("","less than","",n));
}
    else{
        console.log(i.concat("","graeter than","",n));
    }
