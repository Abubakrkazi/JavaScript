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
  
  // Revers setence
  const sentence='I am a learning Web Dev.'
  let revers=''
  for(const letter of sentence){
    //console.log(letter);
    revers=letter+revers;
  }
  console.log(revers);