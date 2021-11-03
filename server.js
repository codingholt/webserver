const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')    
})

//routers
const userRouter = require('./routes/user')

app.use('/user', userRouter);

const doggoRouter = require('./routes/doggo');
app.use('/doggo', doggoRouter);

app.use('/doggo', doggoRouter);
const port = 3000
app.listen(port, console.log(`Running on: http://localhost:${port}`))