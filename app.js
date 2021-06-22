const express = require('express')
const app = express()
const PORT = 3000
const router = require('./routes/index')

const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)


app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

const uri = `mongodb+srv://sayahilmi:inipassword@cluster-ecom.e1iko.mongodb.net/E-Commerce?retryWrites=true&w=majority`

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => {
    console.log('connected to database')
    app.use(router)
})


app.listen(PORT, () => {
    console.log('server is running on port = ', PORT)
})