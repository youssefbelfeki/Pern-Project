const router = require('express').Router();
const {getAllBooks, findBook, updateBook, deleteBook, insertBook} = require('../controllers/books.controllers')

router
    .route('/api/book/getAllBooks')
    .get(getAllBooks)
    router
    .route('/api/book/findBook/:id')
    .get(findBook)
router
    .route('/api/book/updateBook/:id')
    .patch(updateBook)
router
    .route('/api/book/deleteBook/:id')
    .delete(deleteBook)
router
    .route('/api/book/insertBook')
    .post(insertBook)

module.exports = router;