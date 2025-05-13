let originalPrice;
let afterDiscount;
let array=[250,645,300,900,50];
console.log(`Original price ${array}`);
let offer=10;
let offerRate = offer/100;
for(let i in array){
    originalPrice= array[i];
    afterDiscount= originalPrice*offerRate;
    array[i]=originalPrice-afterDiscount; // array[i]-=(array[i]*offerRate);
}
console.log(`After discount price ${array}`);
