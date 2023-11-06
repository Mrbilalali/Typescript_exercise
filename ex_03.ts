const person_Name : string = "Eric,";

const Name1 = person_Name.toLowerCase();
const Name2 = person_Name.toUpperCase();

function titlecase(str: string){
    return str.replace(/\w\S/g, function(t) { return t.toUpperCase() });
}

console.log(Name1);
console.log(Name2);
console.log(titlecase(person_Name));