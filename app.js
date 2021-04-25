const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

app.get('/', function(req, res){
    res.send(' hello world 10')
})

app.post('/', function(req, res) {
    console.log('req body =', req.body)
   res.status(201).json(req.body)
})

app.put('/:id', function(req, res) {
    console.log('params =', req.params)
    console.log('body =', req.body)
    res.status(200).json(req.body)
})

app.delete('/:id', function(req, res) {
    console.log('params =', req.params)
    res.status(200).json(req.params)
})

app.listen(PORT, () => {
    console.log('server is running on port = ', PORT)
})