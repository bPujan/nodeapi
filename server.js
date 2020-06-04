import express from "express"; //ECMA Script
const app = express();

var response={name:"Pujan"};
response.address="Kathmandu";

//app.use(express.static(path.join(__dirname,"public")));

const examp=require("./example");


app.use(mware);
*/


app.get("/",(req,res)=>{
    res.sendFile((path.join(__dirname,"public","abc.html")))});
app.get("/user",(req,res)=>{
    //res.send("Hello World") 
    res.sendFile((path.join(__dirname,"public","xyz.html")))});


    })*/
/*app.get("/",function (req, res){
    res.send("hello world")
});

