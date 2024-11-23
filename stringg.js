//lowercase
const namee="SAMSU VAI";
console.log(namee.toLowerCase());

//uperCase

const nam="Samsu vai";
console.log(nam.toUpperCase());

//SLICE

  const village='Ruhitalabunia';
  const part=village.slice(2,5);
  console.log(part);

  // split
  const studentt=' I am a  student of class 12';
  console.log(studentt.split(' '));

  // uses of-- |,-
  const realfriend=['Rahim','Korim', 'Bablu', 'Kablu', 'Ablu'];
  console.log(realfriend.join());
  console.log(realfriend.join('|'));
  console.log(realfriend.join('-'));

  // Concat
  const first='Abid';
  const Secnd ='Nabid';
  const fullname=first.concat(' ').concat(Secnd)
  console.log(fullname);
  // incluses
  console.log(first.includes('A'));
  
  // Revers sentence
  const sentence='I am a learning Web Dev.'
  let revers=''
  for(const letter of sentence){
    //console.log(letter);
    revers=letter+revers;
  }
  console.log(revers);

  //Using NUmbaer 
  let str = "42";
  let num = Number(str);
  console.log(num); // 42



//  ParseInt
let str = "42px";
let num = parseInt(str, 10); // Base 10
console.log(num); // 42


//ParseFloat
let str = "3.14";
let num = parseFloat(str);
console.log(num); // 3.14


// + operator
let str = "123";
let num = +str;
console.log(num); // 123


//Math operation
let str = "50";
let num = str * 1; // or str / 1, str - 0
console.log(num); // 50



  