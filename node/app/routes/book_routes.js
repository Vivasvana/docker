const lodash = require('lodash');


module.exports = function (app) {
    app.get('/books', (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
    res.send([
        {id: 1, name: 'Anna Karenina', author: 'Leo Tolstoy'},
        {id: 2, name: 'Madame Bovary', author: 'Gustave Flaubert'},
        {id: 3, name: 'War and Peace', author: 'Leo Tolstoy'},
        {id: 4, name: 'Lolita', author: 'Vladimir Nabokov'},
        {id: 5, name: 'The Adventures of Huckleberry Finn', author: 'Mark Twain'},
        {id: 6, name: 'Hamlet', author: 'William Shakespeare'},
        {id: 7, name: 'The Great Gats', author: 'F. Scott Fitzgerald'},
        {id: 8, name: 'In Search of Lost Time', author: 'Marcel Proust'},
    ]);
}
);
    app.get('/books/:id', (req, res) => {
        let books = [
            {id: 1, name: 'Anna Karenina', author: 'Leo Tolstoy', numberOfPages: 108, publishDate: '12.10.1946'},
            {id: 2, name: 'Madame Bovary', author: 'Gustave Flaubert', numberOfPages: 312, publishDate: '10.09.1932'},
            {id: 3, name: 'War and Peace', author: 'Leo Tolstoy', numberOfPages: 3123, publishDate: '25.11.1922'},
            {id: 4, name: 'Lolita', author: 'Vladimir Nabokov', numberOfPages: 6634, publishDate: '12.12.1955'},
            {
                id: 5,
                name: 'The Adventures of Huckleberry Finn',
                author: 'Mark Twain',
                numberOfPages: 3424,
                publishDate: '12.10.1946'
            },
            {id: 6, name: 'Hamlet', author: 'William Shakespeare', numberOfPages: 1677, publishDate: '12.10.1946'},
            {id: 7, name: 'The Great Gats', author: 'F. Scott Fitzgerald', numberOfPages: 108, publishDate: '12.10.1946'},
            {id: 8, name: 'In Search of Lost Time', author: 'Marcel Proust', numberOfPages: 294, publishDate: '12.10.1946'},
        ]
        let foundBook = lodash.find(books, (o) => {
            return o.id === +req.params.id;
});
    res.header("Access-Control-Allow-Origin", "*");
    if (!foundBook) {
        res.send({id: -1});
    } else {
        res.send(foundBook);
    }
}
);
};