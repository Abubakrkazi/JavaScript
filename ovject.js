const person={
    name:'Abubakr kazi',
    age:23,
    profession: 'Developer',
    married:false
    unique={
        skill:'Writter',
    }
}
console.log(person);
console.log(person.name);
console.log(person.unique.skill);

const keys=object.keys(person);
console.log(keys);
const values=object.values(person);
console.log(values);


// loop an object
for(const prop in person){
    console.log(prop)
    console.log(person[prop])
}
