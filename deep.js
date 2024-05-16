let person1={
    name:"arshad",
    age:24,
    city:"noida"
}
let person2={}
for(value in person1){
    person2[value]=person1[value]
}
person2.state='up'
console.log(person2)
console.log(person1)