const { Books } = require("../database/models")

const imageFolder = 'images/'

const BookController = {
    async create(req, res) {

        const file = req.files[0]

        const newBook = await Books.create({
            ...req.body,
            image: imageFolder + file.filename
        })

        console.log(req.files[0]);

        return res.status(201).json(newBook)
    }
}

module.exports = BookController

