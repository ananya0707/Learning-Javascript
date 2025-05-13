let marks =[];
let n= prompt("Enter the value of n");
for(let i=0;i<n;i++){
    marks[i]=i+1;
}
console.log(marks);
let sum= marks.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(sum);
let multi= marks.reduce((prev,curr)=>{
    return prev*curr;
});
console.log(multi);