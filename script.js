//complete this code
class Person {
	constructor(name,age){
		this._name = name  // name and age is semi pvt.
		this._age = age
	}
	getName(){
		return this._name
	}
	setAge(age){
		this._age = age
	}
}

class Student extends Person {
	study(){
		console.log(`${this._name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this._name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

const person = new Person("John",25)
console.log(person.name)

person.age = 30
console.log(person.age)


const student = new Student("Alice",22)
student.study()

const teacher = new Teacher("Bob",40)
teacher.teach()






