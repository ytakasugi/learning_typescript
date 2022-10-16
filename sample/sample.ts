class Klass<T> {
    item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem(): T {
        return this.item;
    }
}

let strObj = new Klass<string>("文字列");
console.log(strObj.getItem());

let numObj = new Klass<number>(5);
console.log(numObj.getItem());

class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let taro = new User("Taro");
console.log(taro.name);

interface Result {
    a: number;
    b: number;
}

function sum(result: Result) {
    return result.a + result.b;
}

let result = {
    a: 1,
    b: 1
};

console.log(sum(result));