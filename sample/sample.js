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
