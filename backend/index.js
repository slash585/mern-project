const express = require("express")
const app = express()
const authRouter = require("./routes/authRoutes")

require("./services/passport")
require('./bootstrap')

app.use("/auth", authRouter)

app.listen(5001, () => {
  console.log("Server started listening to 3000")
})
