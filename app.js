const featuredBooksSection = document.getElementById("featured-books-list");

fetch('featured-books.json')
  .then(response => response.json())
  .then(books => {
    books.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.innerHTML = `
        <h3>${book.title}</h3>
        <img src="${book.coverImage}" alt="${book.title}">
        <p>${book.description}</p>
        <p><a href="#">Read more</a></p>
      `;
      featuredBooksSection.appendChild(bookElement);
    });
  });