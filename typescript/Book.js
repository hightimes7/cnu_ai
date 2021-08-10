var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = >
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book(btitle, bauthor) {
        this.btitle = btitle;
        this.bauthor = bauthor;
    }
    Book.prototype.printInfo = function (input) {
        if (input === void 0) { input = 'Initial'; }
        console.log(input);
        console.log("Title: " + this.btitle + ", Author: " + this.bauthor);
    };
    return Book;
}());
var EBook = /** @class */ (function (_super) {
    __extends(EBook, _super);
    function EBook(btitle, bauthor, btype) {
        var _this = _super.call(this, btitle, bauthor) || this;
        _this.btype = btype;
        return _this;
    }
    // method overriding
    EBook.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
        console.log("Title: " + this.btitle + ", Author: " + this.bauthor + ", Type: " + this.btype);
    };
    return EBook;
}(Book));
var book = new EBook('Book1', 'Writer1', 'PDF');
book.printInfo();
