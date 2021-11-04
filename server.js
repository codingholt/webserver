//requirements
const express = require('express')
//init express
const app = express()

//set view engine to ejs
app.set('view engine', 'ejs')

//set homepage
app.get('/', (req, res) => {
    res.render('index')    
})

//routers
const userRouter = require('./routes/user')
const doggoRouter = require('./routes/doggo');

app.use('/user', userRouter);
app.use('/doggo', doggoRouter);


//listen
const port = 3000
app.listen(port, console.log(`Running on: http://localhost:${port}`))