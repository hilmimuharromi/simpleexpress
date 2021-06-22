const Measurement = require('../models/Measurement')

const AddMeasurement = async (req, res) => {
    try {
        const { name, videoUrl } = req.body
        const result = await Measurement.create({ name, videoUrl })
        res.status(201).json({
            message: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json(error)
    }
}

const GetMeasurements = async (req, res) => {
    try {
        const result = await Measurement.find()
        res.status(200).json({
            message: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json(error)
    }
}

const DeleteMeasurement = async (req, res) => {
    const { id } = req.params
    try {
        const result = await Measurement.deleteOne({ _id: id })
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
    AddMeasurement, GetMeasurements, DeleteMeasurement
}