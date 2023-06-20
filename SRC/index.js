const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(multer().any())
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://saurav438c:Bharat123@cluster0.ueecgjt.mongodb.net/project22 ", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected")) // promisess - 3 state - pending -reject- fulfilled
    .catch(err => console.log(err))


app.use('/', route);


app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});