class User {
    #firstname;
    #lastname;
    #useraddres;
    // mybook;
    constructor(firstname, lastname, useraddres) {
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#useraddres = useraddres;
        this.mybook = [];
    }
    fullname(){
        return`${this.#firstname} ${this.#lastname}`
    }
    addborrowbook(book) { 
        if (!book.canBorrow) { return; }
        book.canBorrow=false; // משנה את מצב הספר ללא ניתן להשאלה
        this.mybook.push(book);
    }
    // החזרת ספר
    returenbook(book){
        book.canBorrow=true; // מחזיר את מצב הספר לניתן להשאלה
    }
}
// הגדרת משתמשים
let user1 =new User('uri','bloy', 'kiryat malachi');
let user2 =new User('abraham','avinu', 'beer sheva');
let user3 =new User('david','king', 'jerusalem');

//***** מטלה נוכחית *****//
class Book {
    constructor(title, author, canBorrow){
        this.title=title;
        this.author=author;
        this.canBorrow = canBorrow ? true : false;
    }
}
//**********//

// הגדרת ספרים
let book1 = new Book ('Journey to the Center of the Earth','Jules Verne', true);
let book2 = new Book ('AAround the World in Eighty Days','Jules Verne', false);
let book3 = new Book ('Harry Potter and the Philosophers Stone','J.K. Rowling',true);
let book4 = new Book ('Harry Potter and the Goblet of Fire','J.K. Rowling',true);
let book5 = new Book ('baal halashon(Manuscript)','Josef Zarka',false);

// הוספה למערך ספרים של המשתמשים
user1.addborrowbook(book1); // ניתן להשאלה
user1.addborrowbook(book2); // לא ניתן להשאלה
user1.addborrowbook(book4); // ניתן להשאלה
user2.addborrowbook(book3); // ניתן להשאלה
user2.addborrowbook(book5); // לא ניתן להשאלה
user1.returenbook(book4); // החזרת ספר
user3.addborrowbook(book3); // הספר אצל משתמש אחר
user3.addborrowbook(book4); // ניתן להשאלה - ספר הוחזר

class Report {
    constructor(name){
        this.name=name;
        this.users=[];
    }
    addnewuser(user){
        this.users.push(user);
    }
    printreport(){
        this.users.forEach(user=>{
            console.log(`${user.fullname()} borrow the books:`);
            user.mybook.forEach(book => console.log(book.title));
        });
    }
}

let januarReport = new Report('januarReport');
januarReport.addnewuser(user1);
januarReport.addnewuser(user2);
januarReport.addnewuser(user3);


// console.log(januarReport);
januarReport.printreport();

