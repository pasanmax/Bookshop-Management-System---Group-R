const express = require('express');
const http= require("http")
const dotenv = require("dotenv")
const errorHandler = require("./middlewares/error")
const cookieParser = require('cookie-parser')


const user = require("./routers/userRoutes")

const connectDB = require("./config/db")
const app = express();
const server = http.createServer(app);

dotenv.config({path:'.env'})

connectDB()

app.use(express.json())

app.use(cookieParser())
app.use(express.urlencoded({extended: true}));

// app.use('/api/v1/contents',contents)
// app.use('/api/v1/products',products)
// app.use('/api/v1/categories',categories)
 app.use('/api/v1/cart',cart)
app.use('/api/v1/user',user)
//user management
app.use( errorHandler)
// user profile
app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});
//bug fixing
app.get('/', (req, res) => {
  res.send('Successful response.');
});

server.listen(3000, () => console.log('Style pulse app is listening on port 3000.'));