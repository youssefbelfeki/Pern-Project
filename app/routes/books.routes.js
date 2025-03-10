const router = require('express').Router();
const {getAllBooks, findBook, updateBook, deleteBook, insertBook} = require('../controllers/books.controllers')
const verifyToken = require('../middleware/jwtVerify')

router
    .route('/api/book/getAllBooks')
    .get(verifyToken, getAllBooks)
    router
    .route('/api/book/findBook/:id')
    .get(verifyToken, findBook)
router
    .route('/api/book/updateBook/:id')
    .patch(verifyToken, updateBook)
router
    .route('/api/book/deleteBook/:id')
    .delete(verifyToken, deleteBook)
router
    .route('/api/book/insertBook')
    .post(verifyToken, insertBook)

module.exports = router;