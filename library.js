let myLibrary = [];
const shelfArea = document.querySelector(".shelf");
const addBookButton = document.querySelector("#add-book");
const popup = document.querySelector(".add-book-popup");

addBookButton.addEventListener("click", hideShowPopup);

class Book {
	constructor(title, author, pages) {
		this.title = title;
		this.author = author;
		this.pages = pages;
	}
}

function addBooksToLibrary() {
	myLibrary.push(new Book("Test", "Me", 50));
	myLibrary.push(new Book("A Book", "You", 55));
	myLibrary.push(new Book("A Novel", "Us", 90));
	myLibrary.push(new Book("A Guide", "Him", 90));
	myLibrary.push(new Book("A Diary", "Her", 90));
}

function getLibraryBooks() {
	myLibrary.map((x) => {
		const card = document.createElement("div");
		card.classList.add("card");

		const title = document.createElement("h2");
		title.textContent = x.title;

		const author = document.createElement("h3");
		author.textContent = x.author;

		card.appendChild(title);
		card.appendChild(author);
		shelfArea.appendChild(card);
	});
}

function hideShowPopup() {
	if (popup.style.display === "" || popup.style.display === "none")
		popup.style.display = "block";
	else if (popup.style.display === "block") popup.style.display = "none";
}

addBooksToLibrary();
getLibraryBooks();
