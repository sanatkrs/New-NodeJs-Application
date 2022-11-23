const express = require("express")
const app = express();

app.get("/", function(req, res) {
  
    res.send("<h1> This is my first hosted project")
})

app.listen(3000, function(){
    console.log("Server started at port 3000")
})


