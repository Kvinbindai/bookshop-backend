const express = require('express')
const allRoute = require('./routes/allRoute')
const auth = require('./routes/auth')
const app = express()
const port = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// app.get('/',(req,res)=>{
//     return res.json({
//         req : req,
//         res : res
//     })
// })

app.use('/login',auth)

app.use('/api',allRoute)

//Error Handle
app.use((err,req,res,next)=>{
    res.status(err.status)
    return res.json({
        code : err.code,
        error : err.message
    })
})

app.listen(port,()=>{
    console.log(`Server is Started at Port ${port}`)
})