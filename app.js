const mongoose = require("mongoose")
const express = require("express")
const mobileRoute = require("./route/mobileRoute")
const cors = require("cors")


const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.send("Home")
})

app.use("/api/mobiles",mobileRoute)

app.listen(5000)

async function DB() {
    try {
        const res = await mongoose.connect("mongodb+srv://Abhishek:Abhishek@cluster0.9sb7k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        const data = await res.default;
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}

DB()