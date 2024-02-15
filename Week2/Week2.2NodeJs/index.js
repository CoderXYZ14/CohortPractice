const express = require('express')
const app = express()
const port = 3000


//create route handler
app.get("/route-handler",(req,res)=>{
    // res.send("Hello World");
    //or
    res.json({
        name:"shahwaiz",
        age:19
    })
})

app.post('/conversations',(req,res)=>{
    // res.send("<b>Hi there</b>")
    console.log(req.headers)
    res.send({
        msg:"2+2=4"
    })
})
app.get('/', (req, res) => {
//   res.send('Hello World!')
    
    res.send('<b>Hello World</b>')
})

app.listen(port)