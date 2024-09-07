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


// Sorting arry
const numbers=[2,6,8,10,90,70,50,30];
const num_asc=numbers.sort(function(a,b){return a-b})
console.log(num_asc);

// soting decending order
const numbers=[2,6,8,10,90,70,50,30];
const num_dsc=numbers.sort(function(a,b){return b-a})
console.log(num_dsc);