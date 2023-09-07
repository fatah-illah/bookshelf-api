const books = require('../books');

const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;

  let res = [...books];

  if (reading === '0') {
    res = res.filter((book) => book.reading === false);
  } else if (reading === '1') {
    res = res.filter((book) => book.reading === true);
  }

  if (finished === '0') {
    res = res.filter((book) => book.finished === false);
  } else if (finished === '1') {
    res = res.filter((book) => book.finished === true);
  }

  if (name) {
    const regex = new RegExp(name, 'i');
    res = res.filter((book) => regex.test(book.name));
  }

  const bookList = res.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  const response = h.response({
    status: 'success',
    data: {
      books: bookList,
    },
  });
  response.code(200);
  return response;
};

module.exports = getAllBooksHandler;
