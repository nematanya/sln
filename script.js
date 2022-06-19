const users=[
    {firstname:"tanya", age:25},
    {firstname:"soumya",age:26},
    {firstname:"soumya",age:20},
];
const output=users.reduce((name,curr)=>{
    if(curr.age>24)
    name.push(curr.firstname);
    return name
}
,[]);
console.log(output);

