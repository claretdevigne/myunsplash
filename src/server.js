const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use(morgan('dev'))

app.use('/public/', express.static('public'))

app.use('/api/getter/', (req, res) => {
    const files = fs.readdirSync('./public/images/')
    res.json({data: files})
})

app.listen(2000, () => {
    console.log('Server running -->')
})