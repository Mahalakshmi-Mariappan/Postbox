// 
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/postManagerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (!err) {
    console.log('Mongodb connection succeeded.');
  } else {
    console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2));
  }
});
 