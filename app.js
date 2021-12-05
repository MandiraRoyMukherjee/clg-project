const express = require('express')
const db = require("./config/database");
const app = express()

const port = 3000

const bodyParser = require('body-parser');



const userRouter = require("./api/users/user.router");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/api/users", userRouter);
// const mysql = require('mysql')

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "womanapp",
//     connectionLimit: 10
// })

db.connect( (error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("mysql connected");
    }
}

)



app.listen( port, ()=> console.log('> Server is up and running on port : ' + port))