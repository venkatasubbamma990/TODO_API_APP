let mongoose = require('mongoose');
const app = require('./app')
const hostname = '127.0.0.1'
const port = 5000
require("dotenv").config();
mongoose.connect(process.env.DB)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  //mongodb://127.0.0.1:27017/TodoDB



app.listen(port,hostname , ()=> {
    console.log(`server is running on http://localhost:${port}`)
})