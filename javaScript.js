// // const std1 = {studentId:65130500119, firstName: "Sirapat", lastName: "Silsawang"}
// // console.log(typeof std1)
// // console.log(Object.keys(std1))
// // console.log(Object.values(std1))

// // const std2 = {}
// // console.log(Object.keys(std2))
// // console.log(Object.values(std2))

// const std3 = {studentId:651305001199, firstName: "Nig", lastName: "Ga", address: {province: "Bangkok",country: "Thailand"}}
// console.log(std3)
// console.log(Object.values(std3))

// // const std4 = {studentId:651305, firstName: "SASA", lastName: "ZAZA", getFullName: function() {
// //     return `${this.firstName} ${this.lastName}` 
// // }}
// // console.log(std4.firstName)
// // console.log(std4['lastName'])
// // std4.email = 'AAA@mail'
// // std4.firstName = 'Std4FirstName'
// // std4.getAddress = function(){
// //     return this.address
// // }
// // delete std4.email
// // console.log(Object.values(std4))
// // console.log(std4.getFullName())
// // console.log(std4.getAddress())
// // console.log(Object.prototype.isPrototypeOf(std4))
// // console.log(Object.prototype.isPrototypeOf(std2))

// function person(id, fn, ln) {
//     this.id = id
//     this.firstName = fn
//     this.lastName = ln
// }
// const person1 = new person(100,'HE',"HUM")
// // const person2 = new person(100,'YEE',"QUAY")
// // const person3 = new person(100,'GEE',"JUU")
// // console.log(person1)
// // console.log(person2)
// // console.log(person3)
// // person1.email = "Person1@Mail"
// // console.log(person1)
// // console.log(person2)
// // console.log(person3)
// // console.log(Object.prototype.isPrototypeOf(person1))

// class Circle{
//     constructor(r){
//         this.radius = r
//     }
//     area(){
//         return Math.PI*Math.pow(this.radius, 2)
//     }
//     getRadius(){
//         return this.radius
//     }
// }
// const c1 = new Circle(2)
// const c2 = new Circle(3)
// const c3 = new Circle(4)

// console.log(c1.area())
// console.log(c2.area())
// console.log(c3.area())
// console.log(c3.getRadius())
// console.log(Object.prototype.isPrototypeOf(c1))

// const p1 = Object.create(person1)
// console.log(p1.id)
// console.log(Object.prototype.isPrototypeOf(p1))
// p1.advisor = ['Mark Suck','Prayut Chan']
// console.log(p1)
// console.log(std3.address)
// let book1 = {
//     lsbn: 123456789,
//     title: "JavaScript"
// }
// let book2 = {
//     lsbn: 123456789,
//     title: "JavaScript"
// }
// let book3 = {
//     lsbn: 12345678,
//     title: "JavaScript"
// }
// function shallowEquality(book1,book2){
//     return book1.lsbn === book2.lsbn
// }
// console.log(shallowEquality(book1,book2))
// console.log(shallowEquality(book1,book3))

// const obj1 ={}
// const obj2 ={id:1}


// console.log(JSON.stringify(obj1))
// console.log(JSON.stringify(obj2))

// if(JSON.stringify(obj1)==='{}') console.log("obj1 is empty")
// else console.log("Object is not empty")

// if(JSON.stringify(obj2)==='{}') console.log("obj2 is empty")
// else console.log("Object is not empty")

// function isEmpty(obj1){
//     return JSON.stringify(obj1) === '{}'
// }
// console.log(isEmpty(obj1))
// console.log(isEmpty(obj2))

const obj1 = {id:1,name:"eiei",ln:"IUII"}
const obj4 = {id:3,name:"eiei",ln:"IUII"}
const obj2 = { ...obj1}
const obj3 = { ...obj1,...obj4}
console.log(obj1)
console.log(obj3)