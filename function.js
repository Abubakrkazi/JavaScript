function Function(){
    console.log( `This is a function`)
}
Function();


//square
 function digit(number){
    let borgo=number*number
    console.log(`Square of the given number:`,borgo);

 }
 digit(4);

 //function addition//
 function add(num1,num2){
    const sum=num1+num2;  //diff=num1-num2;
    console.log(num1 ,num2 ` er  addition :`, sum);//console.log(num1 ,num2 ` er  difference :`, diff);
 }
 add(5,5);

 // Return values and risive
 function fower(number){
    const result=number*20;
    return result;
 }
  const output=fower(5);
  console.log(`Power of output:`,output);

  // Even  ,Odd size  seck
  function evenoddSize(str){
    console.log('srting: ',str);
    const size =str.lenght;
    if(size % 2==0){
        console.log('Even size.');
    }
    else{
        console.log('Odd size.');
    }
  }
  evenoddSize('Dhaka');

  // Function declaration
  function add(a,b){
  return a+b;}

  const sum=add( 4,5);
  console.log(sum);

  // Funciton Expression
   const add2=function(a,b){
     return a+b;
   }
  const sum=add2( 4,5);
  console.log(sum);

  //Arrow Function
  const add3=(a,b)=>a+b;

   const sum=add2( 4,5);
   console.log(sum);

   // Multiplay
   const  Multiplay =(a,b)=>a*b;

   const Mult= Multiplay( 4,5);
   console.log(Mult);