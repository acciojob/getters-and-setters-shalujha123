class Person {
    constructor(name, age) {
        this._name = name;   // semi-private
        this._age = age;     // semi-private
    }

    // Getter for _name
    get name() {
        return this._name;
    }

    // Getter for _age
    get age() {
        return this._age;
    }

    // Setter for age (so person.age = 30 works)
    set age(newAge) {
        this._age = newAge;
    }
}

class Student extends Person {
    study() {
        console.log(`${this._name} is studying`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this._name} is teaching`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

// Test example
const person = new Person("John", 25);
console.log(person.name);  // John
person.age = 30;
console.log(person.age);   // 30

const student = new Student("Alice", 22);
student.study();

const teacher = new Teacher("Bob", 40);
teacher.teach();
