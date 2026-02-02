let tongFizz = 0;

for (let i=1;i<=50;i++){

    if (i %3===0 && i %5===0){
        console.log("FizzBuzz");
    } 
    else if (i %3===0){
        console.log("Fizz");
        tongFizz +=i; 
    } 
    else if (i %5===0){
        console.log("Buzz");
    } 
    else{
        console.log(i);
    }
}
console.log("Tổng các số in ra 'Fizz' là:" +tongFizz);
