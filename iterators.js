const fruits = ['mango','orange','apple','dasdadadsasada']
let nums = [123,23,1,3]
const numsFive = [5,5,5,5]

const students = [
    {id :1,firstName:"Jaidee",lastName:"tt"},
    {id :2,firstName:"JaiYai",lastName:"aa"},
    {id :3,firstName:"cat",lastName:"bb"}
]

// //The forEach() method of Array instances executes a provided function once for each array element.
let fruitName = " "
fruits.forEach((fruit)=> fruitName+=fruit+" ")
console.log(fruitName)
fruits.forEach((fruit)=> console.log(fruit)) 

// // The filter() method of Array instances creates a shallow copy of a portion of a given array, and filtered down 
const result = fruits.filter((fruit)=> fruit.length >6)
console.log(result)

// //The map() method of Array instances creates a "new array" 
// // populated with the results of calling a provided function on every element in the calling array.
nums.map((number)=> console.log(number*2))

const lastNameOnly = students.map((person)=> person.lastName)
console.log(lastNameOnly)

const fullName = students.map((student)=> student.firstName+" "+student.lastName)
console.log(fullName)

// //return all student ID in the format 'current year' follow with student ID ex: {id :1,firstName:"Jaidee",lastName:"tt"} =>  20231
const getFullYear = new Date(Date.now()).getFullYear()
const currentYear = students.map((student) => getFullYear+""+student.id)
console.log(currentYear)

// // The find() method of Array instances returns the "first element" in the provided array that satisfies the provided testing function
const findJai = students.find((student) => student.firstName.toLowerCase().startsWith("jai") )
console.log(findJai)

const findTeam = students.find((student) => student.firstName.toLowerCase().startsWith("team") )
console.log(findTeam) // return undefined if not found

// //findIndex() first element in an array that satisfies the provided testing function. return -1 is not found
const findIndexJai = students.findIndex((student) => student.firstName.toLowerCase().startsWith("jai") )
console.log(findIndexJai)

// // every()
const moreThanZeroId = students.every((student) => student.id > 0)
console.log(moreThanZeroId)

// // some()
const some = students.some((student)=> student.firstName.toLowerCase().endsWith('sak'))

// //reduce()
const reducer = numsFive.reduce(  (sum,num) => sum*num,1   )
console.log(reducer)

// //return first uppercase character
const names = ['Alice','Bob','Ann','Cath'] //ABAC
const firstUpper = names.reduce(   (firstChar,str) =>  firstChar+str.charAt(0)        )
console.log(firstUpper)

// return total prices
const buyProducts = [
    {price:50 , quantity:2},
    {price:299 , quantity:10},
    {price:15 , quantity:5},]

    const totalPrices = buyProducts.reduce(     (total,product)=> total+product.price*product.quantity,0            )
    console.log(totalPrices)

    //splice()
     nums = [10,3,75,1,30,100]
    //splice to remove 75,1,30
    //splice(startIndex , the number of deleted elements)
    remove = nums.splice(2,3)
    console.log(remove) 

    //splice to add new elements , return empty array
    
    add = nums.splice(2,0,11,55,88)
    console.log(add)
    console.log(nums) //[ 10, 3, 11, 55, 88, 100 ]

    //splice to replace
    // at index 0 with 5
    replace = nums.splice(0,1,5)
    console.log(nums) //[ 5, 3, 11, 55, 88, 100 ]
    console.log(replace) //10

    //replace negative number to zero
    const arrayNum = [-5,-6,7,8,9,-10]
    const replaceZero = arrayNum.map( (array) => array>0 ? array : 0)


    console.log(replaceZero)

    //includes for string
const msg = 'Today is a present'
console.log(msg.includes('Re')) //false
console.log(msg.includes('re')) //true
console.log(msg.includes('day')) // true
console.log(msg.includes('present')) //true
 
const newMsg = msg.split(' ')
console.log(newMsg) //[ 'Today', 'is', 'a', 'present' ]
//includes for array
console.log(newMsg.includes('re')) //false
console.log(newMsg.includes('day')) //false
console.log(newMsg.includes('today')) //false
console.log(newMsg.includes('Today')) //true

//reverse()
console.log(nums) //[ 5, 3, 11, 55, 88, 100 ]
nums.reverse()
console.log(nums) // [ 100, 88, 55, 11, 3, 5 ]