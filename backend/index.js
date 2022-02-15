const express = require("express")
const app = express()
const cookieSession = require("cookie-session")
const passport = require("passport")
const authRouter = require("./routes/authRoutes")
const user = require("./models/User")
const keys = require("./config/keys")

require("./services/passport")
require("./bootstrap")

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use("/auth", authRouter)

app.listen(5001, () => {
  console.log("Server started listening to 3000")
})
