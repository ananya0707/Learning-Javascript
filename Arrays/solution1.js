let sum=0;
let array =[85,97,44,37,76,60];
let len=array.length;
console.log(array);
for(let i of array){
    sum+=array[i];
}
let avg=sum/len;
console.log("Average = ",avg);