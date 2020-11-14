const express = require('express')
const app = express();
const router = require('./studentrouter')

app.use('/students', router)

app.listen(5000, () => console.log('server running'))