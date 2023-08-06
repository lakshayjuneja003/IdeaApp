const app = require("./app");
const mongoose =require("mongoose");
const dbConfig = require('../configes/db.config.js');
const serverConfig= require('../configes/server.config.js');
// // database connection
// logic to connect db and create a Admin
// need to have mongodb up and running in local machine
mongoose.connect(dbConfig.Db_URL)
const db = mongoose.connection;
db.on("error",()=>{
console.log("db is not connected")
});
db.once("open",()=>{
    console.log("db is connected")
})


app.listen(serverConfig.PORT,()=>{
    console.log(`server is running at port ${serverConfig.PORT}`)
})