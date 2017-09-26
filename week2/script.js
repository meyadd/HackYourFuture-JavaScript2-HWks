//////////////////1///////////////////////////1//////////////////////////////////1/////////////////////
function doIt() {
     console.log('I am done');
}
setTimeout(doIt, 5000)
//You must write a function that takes 4 arguments.
//
//A start value
//An end value
//A callback to call if the number is divisible by 3
//A callback to use if the number is divisible by 5
function myFunction(startVal, endVal, threeCallback, fifeCallback) {
     //Array Generation
     let myArray = [];
     let j = 0;
     if (startVal < endVal) {
          for (let i = startVal; i <= endVal; i++) {
               myArray[j] = i;
               j++;
          }
     } else if (endVal < startVal) {
          for (let i = endVal; i <= startVal; i++) {
               myArray[j] = i;
               j++;
          }
     } else myArray = startVal;
     console.log(myArray);
     //check if the array values divisible on 3 or 5 and call the callbacks if true
     for (let k = 0; k < myArray.length; k++) {
          if (myArray[k] % 3 == 0){
               console.log(myArray[k] + ' is divisible on 3 so ' ); 
               threeCallback();
          }
          if (myArray[k] % 5 == 0){
               console.log(myArray[k] + ' is divisible on 5 so ' );
               fifeCallback();
          }
     }
}
function three(){
     console.log('I am threeCallback');
}

function fife(){
     console.log('I am fifeCallback');
}
myFunction(10,15,three,fife);

///////////////////////////////////////////2//////////////////////////////////////////////////////
//with for loop////////3///////////3/////////////////////////3////////////////////3/////////
function repeatStringNumTimes(str, num) {
  let str2 = '';
  if (num <= 0)
    return str2;
  for(let i = 1 ; i <=num ; i++)
    str2 = str2 + str;
  return str2;
}

console.log(repeatStringNumTimes("abc", 3));
//with while loop///////////4/////////////////////4/////////////////////////4/////////////////////
function repeatStringNumTimes(str, num) {
  let myStr = '';
  if (num <= 0)
    return myStr;
  let i = 0;
  while(i < num){
    myStr = myStr + str;
    i++;
  }
  return myStr;
}

console.log(repeatStringNumTimes("abc", 3));
//with do loop////////////5//////////////////////5////////////////////////////////////5//////////
function repeatStringNumTimes(str, num) {
  let myStr = '';
  if (num <= 0)
    return myStr;
  let i = 0;
  do{
    myStr = myStr + str;
    i++;
  }
  while(i < num);
  return myStr;
}

console.log(repeatStringNumTimes("abc", 3));
//////////////8//////////////////////////////////8///////////////////////////////////8/////////////////
//Output multi-dimensional arrays
let TicketInfo =
{
    t1: {
        1: [7, 12, 35,39,41, 43],
        2: [7, 15, 20,34,45, 48],
        3: [3, 7, 10, 13, 22, 43],
        4: [2, 4, 5,23,27, 33]
    },
    t2: {
        1: [10, 12, 17,44,48, 49],
        2: [13, 15, 17, 18, 32, 39],
        3: [16, 17, 20, 45, 48, 49],
        4: [6, 16, 18, 21, 32, 40]
    }
}

for(let i in TicketInfo )
{
    for(let j in TicketInfo[i] )
    {
        for(let k = 0; k < TicketInfo[i][j].length; k++ )
        {
             console.log(TicketInfo[i][j][k]);
        }
    }
}
/////////////////9//////////////////////////////////9//////////////////////////////////9///////////////
//with no need to run the code, in the second statue you passed y wich is a refernce to the object and you could change the value x using this refernce, while in the first statue you passed(copied) the value of x wicht is icreaced and is returned, but this has no effect on the real value of x.
