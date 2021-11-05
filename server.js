//requirements
const express = require('express')
//init express
const app = express()

//set view engine to ejs
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//routers
// const userRouter = require('./routes/users')
// const doggoRouter = require('./routes/doggo');
const uploadRouter = require('./routes/upload')

app.use('/upload', uploadRouter);
// app.use('/users', userRouter);
// app.use('/doggo', doggoRouter);


//listen
const port = 3000
app.listen(port, console.log(`Running on: http://localhost:${port}`))