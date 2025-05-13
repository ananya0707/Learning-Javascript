gameNum= 32;
do{
    val=prompt("Guess the number(It is between 0 to 50)");
    if(val==gameNum){
        console.log("Correctttt, Well done!!!");
        break;
    }
    else
        console.log("Try again");
}while(true);
