const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.post("/", (req, res)=>{

    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var sign = req.body.sign;
  
    if(sign == "add"){
        var result = n1 + n2;
    }
    else if(sign == "sub"){
        var result = n1 - n2;
    }
    else if(sign == "mul"){
        var result = n1 * n2;
    }
    else if(sign == "divi"){
        var result = n1 / n2;
    }


    res.send("Result is: "+result);
})
app.listen(3000, ()=>{
    console.log("Port 3000 is activated...");
})