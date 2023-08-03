import express from "express"
import postRoute from "./routes/posts.js"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import cors from "cors"


const app = express()


app.use(express.json())
app.use(cors())
app.use("/api/posts", postRoute)
app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)



app.listen(8080, ()=>{
    console.log("Server started in port 8080!")
})