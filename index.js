import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import * as Quote from "inspirational-quotes";

const app = express();
const port = 3000;

var today = true;
var todayTasks = ["Wash the dishes", "Send letter"];
var workTasks = ['Close all the sales', 'Do the taxes'];
const quoteObj = Quote.getQuote();
const quote = quoteObj['text'];
const author = quoteObj['author'];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

app.get("/", (req, res) => {
    
    res.render(__dirname + "/views/index.ejs", {
        tasks: todayTasks,
        quote:quote,
        author:author  
    });
});

app.post('/work', (req,res) => {
    if(req.body.workEnvironment === "true") {
        res.render(__dirname + "/views/index.ejs", {
            tasks: workTasks,
            quote:quote,
            author:author,
            workEnvironment:'true' 
        });
    }
});

app.post("/add-task", (req, res) => {
    todayTasks.push(req.body.newTask);
    res.render(__dirname + "/views/index.ejs", {
        tasks:todayTasks
    });
});