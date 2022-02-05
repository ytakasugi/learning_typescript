// 関数はPersonインターフェースの構造を満たすオブジェクトを受け取る。
function intro(person) {
    return "My name is " + person.name + ". I am " + person.age + "!";
}
// Personインターフェースの構造に従う変数を定義します。
var ken = {
    name: 'Ken',
    age: 20
};
// 関数を実行します。
console.log(intro(ken));
var Menu = /** @class */ (function () {
    function Menu(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    Menu.prototype.list = function () {
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
}());
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
sundayMenu.list();
