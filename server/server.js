import express from "express"
import MainRouter from "../routes/Main.route.js"

const app = express()

app.use(express.json())
app.use(MainRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})