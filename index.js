const express = require('express')
const allRoute = require('./routes/allRoute')
const app = express()
const port = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.use('/api',allRoute)

app.listen(port,()=>{
    console.log(`Server is Started at Port ${port}`)
})