//imports
const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
const formData = require('express-form-data');



//settings
const app = express();
const port = process.env.PORT || 3001;

//middlewares
app.use(formData.parse());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//routes
router(app)

//server
app.listen(port);

module.exports = app;