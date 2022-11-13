class User{
    #firstname;
    #lastname;
    #useraddres;
    mybook;
    constructor(firstname, lastname, useraddres){
        this.#firstname=firstname;
        this.#lastname=lastname;
        this.#useraddres=useraddres;
        this.mybook=[];
    }
    //   מאפשר גישה חיצונית לשם משתמש
    fullname(){
        return `${this.#firstname} ${this.#lastname}`;
    }

    addborrowbook(book){
        if (!book.canborrowed) { return; }
            this.mybook.push(book);
        }
    borrowreport(){
        console.log(`The list of books I borrowed: ${this.mybook.join(' , ')}`)
    }
}
//**********//
class book {
    constructor(title, author, canborrowed){
        this.title=title;
        this.author=author;
        if (canborrowed) {
                this.canborrowed = true;
            } else {
                this.canborrowed = false;
            } 
    }
}
//**********//
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
            console.log(user.fullname() +', borrow the books: '+user.addborrowbook());
        });
    }
}


// הגדרת משתמש
let user1 =new User('uri','bloy', 'kiryat malachi');
let user2 =new User('abraham','avinu', 'beer sheva');
let user3 =new User('david','king', 'jerusalem');

// הגדרת ספרים
let book1 = new book ('Journey to the Center of the Earth','Jules Verne',true);
let book2 = new book ('AAround the World in Eighty Days','Jules Verne',true);
let book3 = new book ('Harry Potter and the Philosophers Stone','J.K. Rowling',true);
let book4 = new book ('Harry Potter and the Goblet of Fire','J.K. Rowling',true);
let book5 = new book ('baal halason(Manuscript)','Josef Zarka',false);

// הוספה למערך ספרים של המשתמשים
user1.addborrowbook(book1); 
user1.addborrowbook(book2);
user1.addborrowbook(book4); 
user2.addborrowbook(book1);
user2.addborrowbook(book3); 
user3.addborrowbook(book2);
user3.addborrowbook(book4);

let januarReport = new Report('januarReport');
januarReport.addnewuser(user1);
januarReport.addnewuser(user2);
januarReport.addnewuser(user3);


// console.log(januarReport);
januarReport.printreport();
