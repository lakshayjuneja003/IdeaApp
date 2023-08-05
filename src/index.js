import app from "./app.js";
const port = 3001;

// database connection
import mongoose from "mongoose";
mongoose.connect('mongodb://localhost:3001')




app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})