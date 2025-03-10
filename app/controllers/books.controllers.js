const book = require('../db/models/book')

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await book.findAll()
        res.status(200).json({
            success: true,
            data: allBooks
        });

    } catch (err) {
        console.error(err)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
const findBook = async (req, res) => {
    console.log("findBook", req.params)
    const { id } = req.params
    if (!id)
        return res.status(500).json({
            success: false,
            message: "Id Book Not Provided"
        })
    try {
        const bookFound = await book.findOne({ where: { id } });

        if (!bookFound)
            return res.status(500).json({
                success: false,
                message: "Book Not Found!"
            })

        res.status(200).json({
            success: true,
            data: bookFound
        });
    } catch (err) {
        console.error(err)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
const updateBook = async (req, res) => {
    console.log("updateBook", req.params, req.body)
    const { id } = req.params
    const obj = req.body
    if (!id)
        return res.status(500).json({
            success: false,
            message: "Id Book Not Provided"
        })
    if (!obj)
        return res.status(500).json({
            success: false,
            message: "Data To Update Not Provided"
        })
    try {
        const [updatedBook] = await book.update(
            obj,
            {
                where: { id }
            }

        );
        if (!updatedBook)
            return res.status(500).json({
                success: false,
                message: "Book Not Found"
            })
        res.status(200).json({
            success: false,
            message: "Book Updated successfully"
        });
    } catch (err) {
        console.error(err)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
const deleteBook = async (req, res) => {
    console.log("deleteBook", req.params)
    const { id } = req.params
    if (!id)
        return res.status(500).json({
            success: false,
            message: "Id Book Not Provided"
        })
    try {
        const bookDeleted =  await book.destroy({
            where: {
                id
            },
            force: true
        });

        if (!bookDeleted)
            return res.status(500).json({
                success: false,
                message: "Book Not Found"
            })

        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
const insertBook = async (req, res) => {
    console.log("insertBook", req.body)
    const obj = req.body
    if (!obj)
        return res.status(500).json({
            success: false,
            message: "Data To Insert Not Provided"
        })
    try {
        const instertedBook = await book.create(obj);
        res.status(200).json({
            success: true,
            message: "Book inserted successfully",
            data: instertedBook
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

module.exports = {getAllBooks, insertBook, deleteBook, updateBook, findBook}