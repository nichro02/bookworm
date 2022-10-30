//install dependencies
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//import routes
import postRoutes from './routes/posts.js'

const app = express();

//add posts prefix to post routes
app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const username = process.env.MONGODBUSER;
const password = process.env.MONGODBPW;

//set up environment
const MONGODB_URL = `mongodb+srv://${username}:${password}@cluster0.osqwrx5.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

//set up mongoose connection
mongoose
  .connect(
    `mongodb+srv://cluster0.osqwrx5.mongodb.net/test?retryWrites=true&w=majority`,
    {
      user: process.env.MONGODBUSER,
      pass: process.env.MONGODBPW,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => app.listen(PORT, () => console.log(`Server running on: ${PORT}`)))
  .catch((error) => console.log(error.message))
