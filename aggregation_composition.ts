// агрегация - елочка-освежитель не зависит от класса автомобиль и передается откуда-то из вне
// композиция - двигатель и колеса не могут существовать отдельно от автомобиля

class Engine {
    public drive() {
        console.log("Engine work");
    }
}

class Wheel {
    public drive() {
        console.log("Wheel work");
    }
}

class Freshener {
    // some code...
}

class Car {
    private _engine: Engine;
    private _wheels: Wheel[] = [];
    private _freshener: Freshener;

    constructor(freshener) {
        // Агрегация
        this._freshener = freshener;

        // Композиция
        this._engine = new Engine();

        for (let i = 0; i < 4; i++)
            this._wheels.push(new Wheel());
    }

    // делегирование (такой же метод вызывается у других классов)
    public drive() {
        this._engine.drive();

        for (let i = 0; i < this._wheels.length; i++) {
            this._wheels[i].drive();
        }
    }
}