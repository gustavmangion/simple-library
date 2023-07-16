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
	b.read = inputs[3].checked;
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

	const pagesRead = document.createElement("div");
	const pages = document.createElement("h3");
	pages.textContent = book.pages;

	const read = document.createElement("img");
	read.src = book.read ? "assets/read.png" : "assets/unread.png";

	pagesRead.appendChild(pages);
	pagesRead.appendChild(read);

	card.appendChild(title);
	card.appendChild(author);
	card.appendChild(pagesRead);

	const buttonsArea = document.createElement("div");

	const index = myLibrary.indexOf(book);
	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Remove";
	deleteButton.dataset.libraryIndex = index;
	deleteButton.addEventListener("click", removeFromLibrary);

	const readButton = document.createElement("button");
	readButton.textContent = book.read ? "Mark unread" : "Mark read";
	readButton.dataset.libraryIndex = index;
	readButton.addEventListener("click", readUnreadBook);

	buttonsArea.appendChild(deleteButton);
	buttonsArea.appendChild(readButton);
	card.appendChild(buttonsArea);

	return card;
}

function removeFromLibrary(e) {
	const index = e.target.dataset.libraryIndex;
	myLibrary.splice(index, 1);
	shelfArea.innerHTML = "";
	getLibraryBooks();
}

function readUnreadBook(e) {
	const index = e.target.dataset.libraryIndex;
	const book = myLibrary[index];
	book.read = !book.read;
	shelfArea.innerHTML = "";
	getLibraryBooks();
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
