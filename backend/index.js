const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const port = process.env.PORT || 5000;
const config = require('./server/config/key');
const { User } = require('./server/models/user');
const { auth } = require('./server/middleware/auth');
const cors = require('cors');
const mongoUrl = config.mongoURI;

const connect = mongoose
  .connect(mongoUrl, {
    dbName: 'myFirstDatabase',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB connected.'))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));
app.use('/api/user', require('./server/routes/userRoute'));
app.use('/api/product', require('./server/routes/product'));

// const corsOptions = {
//   origin: '*',
//   credentials: true,
// };
// app.use(cors(corsOptions));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  // All the javascript and css files will be read and served from this folder
  app.use(express.static('client/build'));

  // index.html for all page routes    html or routing and naviagtion
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log('Server is running on ' + port);
});
