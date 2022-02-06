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