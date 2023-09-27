const fruits = ['mango','orange','apple','dasdadadsasada']
const nums = [123,23,1,3]

const students = [
    {id :1,firstName:"Jaidee",lastName:"tt"},
    {id :2,firstName:"JaiYai",lastName:"aa"},
    {id :3,firstName:"cat",lastName:"bb"}
]

//The forEach() method of Array instances executes a provided function once for each array element.
let fruitName = " "
fruits.forEach((fruit)=> fruitName+=fruit+" ")
console.log(fruitName)
fruits.forEach((fruit)=> console.log(fruit)) 

// The filter() method of Array instances creates a shallow copy of a portion of a given array, and filtered down 
const result = fruits.filter((fruit)=> fruit.length >6)
console.log(result)

//The map() method of Array instances creates a "new array" 
// populated with the results of calling a provided function on every element in the calling array.
nums.map((number)=> console.log(number*2))

const lastNameOnly = students.map((person)=> person.lastName)
console.log(lastNameOnly)

const fullName = students.map((student)=> student.firstName+" "+student.lastName)
console.log(fullName)

//return all student ID in the format 'current year' follow with student ID ex: {id :1,firstName:"Jaidee",lastName:"tt"} =>  20231
const getFullYear = new Date(Date.now()).getFullYear()
const currentYear = students.map((student) => getFullYear+""+student.id)
console.log(currentYear)

// The find() method of Array instances returns the "first element" in the provided array that satisfies the provided testing function
const findJai = students.find((student) => student.firstName.toLowerCase().startsWith("jai") )
console.log(findJai)

const findTeam = students.find((student) => student.firstName.toLowerCase().startsWith("team") )
console.log(findTeam) // return undefined if not found

//findIndex() first element in an array that satisfies the provided testing function. return -1 is not found
const findIndexJai = students.findIndex((student) => student.firstName.toLowerCase().startsWith("jai") )
console.log(findIndexJai)

// every()
const moreThanZeroId = students.every((student) => student.id > 0)
console.log(moreThanZeroId)

// some()
const some = students.some((student)=> student.firstName.toLowerCase().endsWith('sak'))