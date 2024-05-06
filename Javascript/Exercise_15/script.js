const books = [
    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        alreadyRead: true
    },
    {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        alreadyRead: false
    }
];

const body = document.body;
const h1 = document.getElementsByTagName("h1");

books.forEach(book => {
    const paragraph = document.createElement("p");
    paragraph.textContent = book.title + " by " + book.author;
    body.appendChild(paragraph);
    h1.after(paragraph);
});