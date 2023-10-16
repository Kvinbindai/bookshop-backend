const express = require('express')
const cookieParser = require('cookie-parser')
const allRoute = require('./routes/allRoute')
const app = express()
const port = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.get('/',(req,res)=>{
    console.log(res)
})

// app.use('/login',auth)

app.use('/api',allRoute)

//ถ้าไม่ได้เขียนดักไว้ให้มาดักที่นี่
app.use((err,req,res,next)=>{
    return  res.status(err.status || 500).json({ msg: err.message });
})

app.listen(port,()=>{
    console.log(`Server is Started at Port ${port}`)
})