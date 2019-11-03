// Connect to Mongo instance
require('./models/db');

const express = require('express');
const ejs = require('ejs');
const bodyparser = require('body-parser');
const path = require('path');
const index = require('./routes/index');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({
    extended: true,
}));

app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views/'));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.listen(port, () => {
    console.log(`Express server started at port: ${port}`);
});

app.use('/', index);
