let formSumit = document.getElementById("new-book-form");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel");
let newBookForm = document.querySelector(".form-control");

const myLibrary = [];
console.log(myLibrary);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);

  newBookForm.style.display = "none";

  myLibrary.push(newBook);
  render();
}

function render() {
  let cardTitle = document.createElement("div");
  let cardAuthor = document.createElement("div");
  let cardPages = document.createElement("div");
  let cardRead = document.createElement("div");
  let deleteButton = document.createElement("button");

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    cardTitle.innerHTML = "<h3>title:</h3><p>" + book.title + "</p>";
    cardAuthor.innerHTML = "<h3>author:</h3><p>" + book.author + "</p>";
    cardPages.innerHTML = "<h3>pages:</h3><p>" + book.pages + "</p>";

    cardRead.innerText = book.read ? "Read" : "Not read yet";
    deleteButton.innerText = "Delete";

    let cardContainer = document.getElementById("card");
    cardContainer.setAttribute("class", "card-control card");

    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardAuthor);
    cardContainer.appendChild(cardPages);
    cardContainer.appendChild(cardRead);
    cardContainer.appendChild(deleteButton);
  }
}

formSumit.addEventListener("submit", (e) => {
  e.preventDefault();

  addBookToLibrary();
});

addBtn.addEventListener("click", () => {
  newBookForm.style.display = "block";
});

cancelBtn.addEventListener("click", () => {
  newBookForm.style.display = "none";
});
