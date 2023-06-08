let myLibrary = [];

class Book {
	constructor(title, author, pages) {
		this.title = title;
		this.author = author;
		this.pages = pages;
	}
}

function addBookToLibrary() {
	myLibrary.push(new Book("Test", "Me", 50));
	myLibrary.push(new Book("A Book", "You", 55));
	myLibrary.push(new Book("A Novel", "Us", 90));
}

function getLibraryBooks() {
	myLibrary.map((x) => {
		console.log(x.title);
	});
}

addBookToLibrary();
getLibraryBooks();
