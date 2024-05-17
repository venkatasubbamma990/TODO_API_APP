let mongoose = require('mongoose');
const app = require('./app')
const hostname = '127.0.0.1'
const port = 5000
mongoose.connect("mongodb+srv://venkatasubbamma990:admin@cluster0.rii1xob.mongodb.net/TodoDB?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  //mongodb://127.0.0.1:27017/TodoDB
//mongodb+srv://venkatasubbamma990:sudha1454@cluster0.rii1xob.mongodb.net/
//mongodb+srv://venkatasubbamma:sudha1454@cluster0.dro8kmw.mongodb.net/?retryWrites=true&w=majority


app.listen(port,hostname , ()=> {
    console.log(`server is running on http://localhost:${port}`)
})