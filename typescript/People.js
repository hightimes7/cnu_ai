
var Person = /** @class */ (function () {
    function Person(name, address, age) {
        this.myName = name;
        this.myAddress = address;
        this.myAge = age;
    }
    Person.prototype.printInfo = function (obj) {
        Object.keys(obj).forEach(function (t) { return console.log(obj[t]); });
    };
    return Person;
}());
var obj = new Person("Hong", "Seoul", 30);
obj.printInfo(obj);
