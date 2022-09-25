const express= require('express');
const errorHandler = require('./middlewares/errorHandler');
const app = express()
const port = 3000
const router= require('./routers/index');

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(router)

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`connected to port ${port}`);
})