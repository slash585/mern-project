const mongoose = require("mongoose")
const connectionUrl = require('./config/keys')

mongoose.connect(connectionUrl.mongoDbConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function () {
  console.log("We are connected to mongoDB!")
})

module.exports = { mongoose }
