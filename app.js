const express =require("express")
const app = express();
const books =require("./books.json")

app.get(`/books`,middlerware,(req,res)=>{
    
        return res.send(books)
})

app.get(`/books/:name`,middlerware,(req,res)=>{
    if(req.name =req.params.name)
    {
        return res.send({bookName: req.name})
    }
})

function middlerware(req,res,next)
{
    console.log("Fetching all books")
    next();
}



app.listen(3000,function(){
    console.log("Listening to localhost :3000")
})