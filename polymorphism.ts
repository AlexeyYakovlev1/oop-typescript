/*
    Параметрический - истинный:
        много форм, но работаем одинаково
    ad-hoc - мнимый:
        например перегрузка методов, два метода выполняют одинаковую операцию, но принимают и возвращают разные типы данных
*/

class Person {
    private _name = "";
    private _age = 0;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    public greeting() {
        console.log(`Hello, i'm human and my name is ${this._name}`);
    }

    public goToSleep(sec: number) {
        for (let i = sec; i >= 1; i--)
            console.log(`I will fall asleep in ${i} sec`);
        console.log(`Zzzzz...`);
    }

    public get getName() {
        return this._name;
    }

    public get getAge() {
        return this._age;
    }

    public set setName(value: string) {
        if (value) {
            this._name = value;
        } else {
            this._name = "";
        }
    }

    public set setAge(value: number) {
        if (value) {
            this._age = value;
        } else {
            this._age = 0;
        }
    }
}

class Employee extends Person {
    private _job = "";

    constructor(name: string, age: number, job: string) {
        super(name, age);

        this._job = job;
    }

    // переопределяем метод
    public greeting() {
        console.log(`Hello, i'm employee and my name is ${this.getName}`);
    }

    public get getJob() {
        return this._job;
    }

    public set setJob(value: string) {
        if (value) {
            this._job = value;
        } else {
            this._job = "";
        }
    }
}

class Developer extends Employee {
    private _level: string = "junior";

    constructor(name: string, age: number, job: string, level: string) {
        super(name, age, job);

        this._level = level;

    }

    // переопределяем метод
    public greeting() {
        console.log(`Hello, i'm developer and my name is ${this.getName}`);
    }

    public drinkCofee(procent: number = 34) {
        for (let i = procent; i >= 1; i--)
            console.log(`Drink coffee: ${i}%`);
        console.log("I drank everything");
    }

    public get getLevel() {
        return this._level;
    }

    public set setLevel(value: string) {
        if (value) {
            this._level = value;
        } else {
            this._level = "junior";
        }
    }
}

const person = new Person("ALEX", 17);
const employee = new Employee("PROGER", 17, "front-end developer");
const developer = new Developer("FRONT-END", 17, "front-end devloper", "middle");

// person.greeting();
// employee.greeting();
// developer.greeting();

const personList: Person[] = [person, employee, developer];

function massGreeting(persons: Person[]) {
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];

        person.greeting();
    }
}

massGreeting(personList);