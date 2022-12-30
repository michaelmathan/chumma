
const person ={
    name:"aaron",
    age:20,
}

person.name="muthu"; person["age"]=25;
// console.log(person)
// console.log(person.name);

//obj mthds

//create

// const student=Object.create(person,{});
// student.position="frontend";
// console.log(student);
// console.log(person)

//assign

const assign=Object.assign(person,student,{gender:"male", dob:`2/3/2000`});
console.log(assign)

//freeze

Object.freeze(person);
console.log(person);
person.name="othneil";
console.log(person);

//keys

const keys=Object.keys(person);
console.log(keys)

//values

const values=Object.values(person);
console.log(values)

//entries

const entries=Object.entries(person);
console.log(entries)