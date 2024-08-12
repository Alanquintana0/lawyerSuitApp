const { connection } = require("./database/connection");
const express = require("express");
const cors = require("cors");

const caseRouter = require('./router/cases');

connection();

const app = express();
const port = 3900;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/legalcase', caseRouter);

app.get("/", (req, res) =>{
    return res.status(200).json({
        message: "Welcome to my api"
    })
});

app.listen(port, () => {
    console.log("App running on port: " + port);
})