const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const user = require("./user")


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("ok")
})

app.get("/user",(req,res)=>{
    res.status(200).json(user)
})

app.get("/user/:id",(req,res)=>{
    res.status(200).json(user[req.params.id-1 || 0])
})

const randomMath = () => {
    return Math.floor(Math.random()*100)
}

app.get("/math",(req,res) => {
    const r = randomMath()
    res.status(200).json({
        num:r
    })
})

app.listen(8000,()=>{
    console.log("connecting to port 8000");
})