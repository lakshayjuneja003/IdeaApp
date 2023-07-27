const Express = require('express')  // requiring express.js
const app = Express();  // starting express.js
const serverConfig = require("./configes/server.config")
app.listen(serverConfig.PORT,()=>{
    console.log(`server has started at ${serverConfig.PORT}`)
});