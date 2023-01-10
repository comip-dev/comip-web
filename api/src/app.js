const express = require("express");
var cors = require("cors");
require("dotenv").config();
const fileUpload = require('express-fileupload')

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies
app.use(cors());
app.use( express.static( "public" ) );
app.use(fileUpload({useTempFiles:true}))
/*Routers used*/
const alturasRouter = require('./routes/alturas')
const newsRouter = require('./routes/news')
/* middlewares */


/*Routes*/
app.use('/alturas',alturasRouter)
app.use('/news',newsRouter)

/* Invalid routes*/

/* Invalid routes */
app.use(function (_, res) {
  res.json({ status: "inexistent route" });
});

module.exports = app;