// Personインターフェースをとその要素を型と共に定義。
interface Person {
    name: string;
    age: number;
}

  // 関数はPersonインターフェースの構造を満たすオブジェクトを受け取る。
function intro(person:Person): string {
    return `My name is ${person.name}. I am ${person.age}!`
}

// Personインターフェースの構造に従う変数を定義します。
var ken = {
    name: 'Ken',
    age: 20
}

// 関数を実行します。
console.log(intro(ken));

class Menu {
    items: Array<string>;
    pages: number

    constructor(item_list: Array<string>, total_pages: number) {
        this.items = item_list;
        this.pages = total_pages;
    }

    list(): void {
        console.log("Our menu for today:");
        for(var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

var sundayMenu = new Menu(["pancakes","waffles","orange juice"], 1);

sundayMenu.list();