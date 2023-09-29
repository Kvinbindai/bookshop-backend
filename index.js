const express = require('express')
const allRoute = require('./routes/allRoute')
const auth = require('./routes/auth')
const app = express()
const port = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('Hello World!')
})
app.use('/login',auth)
app.use('/api',allRoute)

app.listen(port,()=>{
    console.log(`Server is Started at Port ${port}`)
})