let companies=["Bloomberg","Microsoft","Uber","IBM","Netflix"];
console.log(companies);
companies.shift();
console.log("Removing first company",companies);
companies.splice(1,1,"Ola");
console.log("Removing uber and adding ola",companies);
companies.push("Amazon");
console.log("Adding Amazon",companies);