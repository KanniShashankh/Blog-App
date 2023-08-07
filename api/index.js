import express from "express"
import postRoute from "./routes/posts.js"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser)
app.use("/api/posts", postRoute)
app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)

app.get("/hello", (req, res)=>{
   return res.json("helo")
})

app.listen(3000, () => {
    console.log("Server started in port 8800!")
})