//incrementing
function printNumberPlusOne(num){
    ++num; 
    
    //this adds one,
    console.log(num);

    //when pass in a 3

    //this gives 4

    console.log(numm++);
    // this gives 5 ( if line 8 is commented out)

  //  console.log(++num);
    
}

//print 0-9
function forLoops(){
for (i=0; i<10; i++){
console.log(i);

}
let myObj = {"key1":"value1","key2":"value2","key3":"value3"};
for (x in myObj){
    console.log(x); // this is just the key
    console.log(myObj.x); //this is the actual value
}
}

//while loops
//this is an infrinite loop
//while(true){

//}
//my Boolean is in the global scope;
// all function can see it , it belongs to the window object
let myBoolean = true;

function func(){
  if(myBoolean == true) {
    console.log("my boolean is true!");
  } else {
    console.log("my boolean is false!");
  }
  }
// experiment with truthy and falsy

function largestOfThree(a,b,c){
  //check whether input is of type number
  // evaluate whther the conversation to number fails for
  //Any of the inputs
  // if so , return Nan
  if (isNaN(Number(a)) | isNaN(Number(b)) | isNaN(Number(c))){
return NaN; // exit function with value Nan
  }
  //ok, so now we can actuallly do the comparison!
  //only way we can get to this point of the function
  //is if the if-statement conditon is not satisfied
  ///(Could alse use an else block)

  // problem - what if a and b are equal and larger than c?
/*if(a > b && a > c){
  return a;
}
else if (b > a && b > c ) {

return b;

} else {

  return c;
}

}
*/
let largest =a;
if(b > largest) {
  largest = b;
} 
if(c > largest) {
  largest = c;
}
// moving through other values and comparing each one to current largest
//if current value is larger than 'largest', set it as 'largest'

return largest;

}

function largestInArray(numArray){
  //use loop to find Array

  let largest = numArray[0];
  for (i=1; i < numArray.length; i++){
    if(numArray[i] > largest){
      largest = numArray[i];
    }
  }

  return largest;
}

