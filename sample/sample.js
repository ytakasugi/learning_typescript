var Klass = /** @class */ (function () {
    function Klass(item) {
        this.item = item;
    }
    Klass.prototype.getItem = function () {
        return this.item;
    };
    return Klass;
}());
var strObj = new Klass("文字列");
console.log(strObj.getItem());
var numObj = new Klass(5);
console.log(numObj.getItem());
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var taro = new User("Taro");
console.log(taro.name);
function sum(result) {
    return result.a + result.b;
}
var result = {
    a: 1,
    b: 1
};
console.log(sum(result));
