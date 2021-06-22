const Product = require('../models/Product')


const AddProduct = async (req, res) => {
    try {
        const { name, image, customizes, fabrics, measurements } = req.body
        const result = await Product.create({
            name, image, customizes, fabrics, measurements
        })
        console.log(result, 'result')
        res.status(201).json({
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

const GetProducts = async (req, res) => {
    try {
        const result = await Product.find().populate('customizes.customize').populate('fabrics.fabric').populate('measurements.measurement')
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

const DeleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        const result = await Product.deleteOne({ _id: id })
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
    AddProduct, GetProducts, DeleteProduct
}