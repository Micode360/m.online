const express = require("express");
const cors = require("cors");


const port = process.env.PORT || 3500;

const app = express();
app.use(express.json());
require('dotenv').config();
app.use(cors());
app.use(express.urlencoded({extended: true}));


app.get('/router', (req,res)=>{
    res.json({
        messsage: 'Server is live'
    });
});

app.listen(port, () => console.log(`Web service running on port ${port}`));