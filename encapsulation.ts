/*
    Сам класс является совего рода капсулой, которая содержит в себе
    свойства и методы для работы с этими свойствами,
    Она позволяет их объединить.
*/

class Rectangle {
    private _width: number = 1;
    private _height: number = 1;

    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    public get getWidth() {
        return this._width;
    }

    public get getHeight() {
        return this._height;
    }

    public set setWidth(value) {
        if (value > 0) {
            this._width = value;
        } else {
            this._width = 1;
        }
    }

    public set setHeight(value) {
        if (value > 0) {
            this._height = value;
        } else {
            this._height = 1;
        }
    }

    private calcArea() {
        return this._width * this._height;
    }
}

const rect = new Rectangle(20, 32);

rect.setWidth = 32;
console.log(rect.getWidth); // 32

function generateRandomId() {
    return Math.ceil(Math.random() * 32);
}

class User {
    private username;
    private password;
    private _id;

    constructor(username, password) {
        this.username = username;
        this.password = password;
        this._id = generateRandomId(); // свойство id будем определять только мы, из вне никто не сможет повлиять на него
    }

    public get getUserName() {
        return this.username;
    }

    public get getPassword() {
        return this.password;
    }

    public set setUserName(value) {
        if (value) {
            this.username = value;
        } else {
            this.username = "";
        }
    }

    public set setPassword(value) {
        if (value) {
            this.password = value;
        } else {
            this.password = "";
        }
    }
}

const user = new User("Alexey", "12345");

user.setUserName = "Alex";
console.log(user.getUserName); // Alex