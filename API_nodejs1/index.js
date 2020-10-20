const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('first api'))
app.get('/first', (req, res) => res.send('first page'))
app.listen(port, () => console.log(`first api on port 3000`))