// require('./db')
// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')

// var postMessageRoutes = require('./controllers/postMessageController')


// var app = express()
// app.use(bodyParser.json())
// //app.use(cors({origin:' http://192.168.32.251:3000'}))
// app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:4001'] }));

// app.listen(4001,()=>console.log('Server started at : 4001'))


// app.use('/postMessages',postMessageRoutes)
require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var postMessageRoutes = require('./controllers/postMessageController')


var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.listen(4001,()=>console.log('Server started at : 4001'))


app.use('/postMessages',postMessageRoutes) 