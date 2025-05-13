function countVowel(str){
    let sum=0;
    let lowerStr = str.toLowerCase();
    for(let i of lowerStr){
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
            sum+=1;
        }
    }
    return sum;
}
let string = prompt("Enter a string");
console.log(string);
count= countVowel(string);
console.log("The number of vowels in the given string= ",count);