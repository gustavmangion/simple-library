let myLibrary = [];
const shelfArea = document.querySelector(".shelf");
const addBookButton = document.querySelector("#add-book");
const addBookSubmitButton = document.querySelector("#submit-add-book");
const addBookCancelButton = document.querySelector("#cancel-add-book");
const pageMask = document.querySelector(".page-mask");
const popup = document.querySelector(".add-book-popup");
const header = document.querySelector("header");
const main = document.querySelector("main");

addBookButton.addEventListener("click", hideShowPopup);
addBookSubmitButton.addEventListener("click", submitBook);
addBookCancelButton.addEventListener("click", hideShowPopup);

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

function submitBook() {
	const form = document.querySelector(".book-form");
	const inputs = form.elements;
	let b = new Book();
	b.title = inputs[0].value;
	b.author = inputs[1].value;
	b.pages = inputs[2].value;
	b.read = inputs[3].value === "on";

	myLibrary.push(b);
	shelfArea.appendChild(getBookCard(b));
	hideShowPopup();
	form.reset();
}

function addBooksToLibrary() {
	myLibrary.push(new Book("Test", "Me", 50, true));
	myLibrary.push(new Book("A Book", "You", 55, false));
	myLibrary.push(new Book("A Novel", "Us", 90, false));
	myLibrary.push(new Book("A Guide", "Him", 90, true));
	myLibrary.push(new Book("A Diary", "Her", 90, false));
}

function getLibraryBooks() {
	myLibrary.map((x) => {
		shelfArea.appendChild(getBookCard(x));
	});
}

function getBookCard(book) {
	const card = document.createElement("div");
	card.classList.add("card");

	const title = document.createElement("h2");
	title.textContent = book.title;

	const author = document.createElement("h3");
	author.textContent = book.author;

	card.appendChild(title);
	card.appendChild(author);

	return card;
}

function hideShowPopup() {
	if (popup.style.display === "" || popup.style.display === "none") {
		popup.style.display = "block";
		pageMask.style.display = "block";
	} else if (popup.style.display === "block") {
		popup.style.display = "none";
		pageMask.style.display = "none";
	}
}

addBooksToLibrary();
getLibraryBooks();
