import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import * as Quote from "inspirational-quotes";

const app = express();
const port = 3000;

var tasks = ["Wash the dishes", "Send letter"];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

app.get("/", (req, res) => {
    var quoteObj = Quote.getQuote();
    var quote = quoteObj['text'];
    var author = quoteObj['author'];

    console.log("quote:",quote);
    console.log("author:", author);
    res.render(__dirname + "/views/index.ejs", {
        tasks: tasks,
        quote:quote,
        author:author  
        });
});

app.post("/add-task", (req, res) => {
    tasks.push(req.body.newTask);
    res.render(__dirname + "/views/index.ejs", {
        tasks:tasks
    });
});