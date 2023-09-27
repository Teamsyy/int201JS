class person  { //create class
    constructor(firstName,lastName,dateOfBirth){ //create constructor
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth
    }

getFullname() {
        return `${firstname},${lastName}`
    }
    
    getAge(){
        const millToday = Date.now() //millisec of today
        //The getTime() method of date instance return number of millisecond
        const milliBirthDate = this.dateOfBirth.getTime() //millosec of dateOfBirth
        const diffMilli = millToday - milliBirthDate
        const dateOfDiffMilli = new Date(diffMilli)
        return dateOfDiffMilli.getFullYear() - 1970;
    }
isEqual(anotherPerson){
        return (this.firstName?.toLowerCase() === anotherPerson?.firstName?.toLowerCase()
            &&
            this.lastName?.toLowerCase() === anotherPerson?.lastName?.toLowerCase())
    }
toString(){

    }
}
const person1 = new person('best','tanaporn', new Date(2004,2,11))
const me = new person('Team','Thuanchamnan',new Date(2003,10,23)) // new object
console.log(me.isEqual(person1))
    








