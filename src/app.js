import express from 'express';
const app = express();

app.get("/", (req,res) => {
    res.send("hello guys!")
});

app.listen(3000, _ => {
    console.log("Listening to port 3000");
})