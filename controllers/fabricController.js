const Fabric = require('../models/Fabric')

const AddFabric = async (req, res) => {
    try {
        const { name, imageUrl, fabricType, price } = req.body
        const result = await Fabric.create({ name, imageUrl, fabricType, price })
        res.status(201).json({
            message: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json(error)
    }
}

const GetFabrics = async (req, res) => {
    try {
        const result = await Fabric.find()
        res.status(200).json({
            message: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json(error)
    }
}

const DeleteFabric = async (req, res) => {
    const { id } = req.params
    try {
        const result = await Fabric.deleteOne({ _id: id })
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error
        })
    }
}

module.exports = {
    AddFabric, GetFabrics, DeleteFabric
}