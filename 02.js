//15-1-24
// 34-207-10 cabin number
//node js is asynchronous , non-blocking and event driven
const express = require("express");
const app = express();

const port = 8080;

app.listen(()=>{
    console.log(`Server listening to port ${port}`);
});

app.use((req, res)=>{
    console.log("request received.")
    res.send("Working");
});