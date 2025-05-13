let marks=prompt("Enter your marks");
let result;
if (marks > 79) {
    result = "A";
} else if (marks > 69) {
    result = "B";
} else if (marks > 59) {
    result = "C";
} else if (marks > 49) {
    result = "D";
} else {
    result = "F";
}
console.log("Your result: ",result);