class Book {

    btitle: string;
    bauthor: string;

    constructor(btitle:string, bauthor:string) {
        this.btitle = btitle;
        this.bauthor = bauthor;
    }

    printInfo(input:string = 'Initial'): void {
        console.log(input);
        console.log(`Title: ${this.btitle}, Author: ${this.bauthor}`);
    }
}

class EBook extends Book {

    btype: string;

    constructor(btitle:string, bauthor:string, btype:string) {

        super(btitle, bauthor);
        this.btype = btype;
    }

    // method overriding
    printInfo(): void {

        super.printInfo();
        console.log(`Title: ${this.btitle}, Author: ${this.bauthor}, Type: ${this.btype}`);
    }
}


let book:Book = new EBook('Book1','Writer1','PDF');

book.printInfo();
