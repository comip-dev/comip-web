const express = require("express");
var cors = require("cors");
require("dotenv").config();
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;

const app = express();
var whitelist = ['http://localhost:3000', /** other domains if any */ ]
var corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
  // withCredentials:true
}
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(morgan('dev'));
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });
app.use( express.static( "public" ) );
app.use(fileUpload({useTempFiles:true}))
/*Routers used*/
const alturasRouter = require('./routes/alturas')
const newsRouter = require('./routes/news')
const userRouter = require('./routes/user')
/* middlewares */


/*Routes*/
app.use('/alturas',alturasRouter)
app.use('/news',newsRouter)
app.use('/user',userRouter)

/* Invalid routes*/

/* Invalid routes */
app.use(function (_, res) {
  res.json({ status: "inexistent route" });
});

module.exports = app;