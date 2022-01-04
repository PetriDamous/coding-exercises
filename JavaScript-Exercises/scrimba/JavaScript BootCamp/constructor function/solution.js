// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:

function Book (id, title, author, themes = []) {
    // your code here
    this.id = id;
    this.title = title;
    this.author = author;
    this.themes = themes;
}

Book.prototype.addTheme = function (theme) {
    this.themes = [...this.themes, theme];
}

const book1 = new Book(1, "Resident Evil", "SD Perry");

const book2 = new Book(2, "Bandit Story", "PetriD");

book1.addTheme("Horror");

book2.addTheme("Romance");

console.log(book1);

console.log(book2);