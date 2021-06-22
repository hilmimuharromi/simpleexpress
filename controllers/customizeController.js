const Customize = require('../models/Customize')


async function AddCustomize(req, res) {
    console.log('add customze service =======', req.body)


    try {
        const { name, item } = req.body
        const result = await Customize.create({ name, item })
        res.status(201).json({
            message: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json(error)
    }

}

const GetCustomize = async (req, res) => {

    try {
        const result = await Customize.find()
        res.status(201).json({
            message: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json(error)
    }

}

module.exports = {
    AddCustomize,
    GetCustomize
}