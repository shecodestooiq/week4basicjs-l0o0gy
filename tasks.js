// Task 1
function checkVotingEligibility() {
  let age=20
  if (age >= 18 ) {
    console.log('You are eligible for voting');
  } else {
    console.log('You are not eligible for voting');

  }
}
checkVotingEligibility()

// Task 2
function printNumbersWithWhile() {
  let i=1;
  while (i < 6){
      console.log(i);
          i++;  
  }
}
printNumbersWithWhile()

// Task 3
function printEvenNumbersWithFor() {
  let num =10;
  for (let i=0 ;i <= num ;i++){
    let num2=i*2;
    if (num2<=num){
        if (num2 == 0){
        }else{
            console.log(num2);}

        }
    }
  }
printEvenNumbersWithFor();

// Task 4
function getDayOfWeek() {
  let day=3;
  switch (day) {
      case 1:
        console.log('Sunday');  
        break;
  
        case 2:
          console.log('Monady');  
          break;
  
        case 3:
          console.log('Tuesday');  
           break;
  
        case 4:
          console.log('Wednesday');  
           break;
  
        case 5:
           console.log('Thursday');  
            break;
  
        case 6:
           console.log('Friday'); 
            break; 
  
        case 7:
           console.log('Saturday');  
            break;
        case 9:
          console.log('Invalid day');  
          break;
  }
}
getDayOfWeek()

// Task 5
function sum(num1,num2) {
  console.log(num1+num2); 
}
sum(5,3);
// Task 6
//Uncomment and solve
const fruits=["Apple","Kiwi","Cherry","Banana"]
console.log(fruits);

module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};
