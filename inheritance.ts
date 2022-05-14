class Person {
    private name = "";
    private age = 0;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public goToSleep(sec: number) {
        for (let i = sec; i >= 1; i--)
            console.log(`I will fall asleep in ${i} sec`);
        console.log(`Zzzzz...`);
    }

    public get getName() {
        return this.name;
    }

    public get getAge() {
        return this.age;
    }

    public set setName(value: string) {
        if (value) {
            this.name = value;
        } else {
            this.name = "";
        }
    }

    public set setAge(value: number) {
        if (value) {
            this.age = value;
        } else {
            this.age = 0;
        }
    }
}

class Employee extends Person {
    private job = "";

    constructor(name: string, age: number, job: string) {
        super(name, age);

        this.job = job;
    }

    public get getJob() {
        return this.job;
    }

    public set setJob(value: string) {
        if (value) {
            this.job = value;
        } else {
            this.job = "";
        }
    }
}

const employee = new Employee("Alexey", 17, "front-end developer");

employee.goToSleep(6);
console.log(employee.getName); // Alexey
console.log(employee.getJob); // front-end developer

class Developer extends Employee {
    private level: string = "junior";

    constructor(name: string, age: number, job: string, level: string) {
        super(name, age, job);

        this.level = level;
    }

    public drinkCofee(procent: number = 34) {
        for (let i = procent; i >= 1; i--)
            console.log(`Drink coffee: ${i}%`);
        console.log("I drank everything");
    }

    public get getLevel() {
        return this.level;
    }

    public set setLevel(value: string) {
        if (value) {
            this.level = value;
        } else {
            this.level = "junior";
        }
    }
}

const developer = new Developer("Alexey", 17, "front-end devloper", "middle");

developer.drinkCofee(94);
developer.goToSleep(32);