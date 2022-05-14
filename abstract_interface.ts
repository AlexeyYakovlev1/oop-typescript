// абстрактные классы похожи на интерфейсы, но в них можно
// писать реализацию метода, то есть нетолько тип аргументов и что возвращает

interface IReader {
    read(url: string): void;
}

interface IWriter {
    write(data: any): void;
}

// имплементируем интерфейсы сколько угодно
class FileClient implements IReader, IWriter {
    read(url): void {
        const filtUrl = url.replace("http", "https");
    }

    write(data): void {
        for (const obj in data) {
            const val = data[obj];
        }
    }
}

interface IRepository<T> {
    create: (obj: T) => T;
    remove: (obj: T) => T;
    update: (obj: T) => T;
    get(): void;
}

interface IUser {
    name: string;
    email: string;
}

class UserRepo implements IRepository<IUser> {
    create(obj: IUser): IUser {
        // login...
        return obj;
    };

    remove(obj: IUser): IUser {
        // logic...
        return obj;
    };

    update(obj: IUser): IUser {
        // logic...
        return obj;
    };

    get(): void {
        // logic...
    };
}

interface ICar {
    old: number;
    brand: string;
}

class CarRepo implements IRepository<ICar> {
    create(obj: ICar): ICar {
        // login...
        return obj;
    };

    remove(obj: ICar): ICar {
        // logic...
        return obj;
    };

    update(obj: ICar): ICar {
        // logic...
        return obj;
    };

    get(): void {
        // logic...
    };
}