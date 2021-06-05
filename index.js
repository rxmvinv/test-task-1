const express = require('express');
const path = require('path');
const expHbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 5000;

const hbs = expHbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.enable('view cache');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes/main'));

app.listen(PORT, () => console.log('Server has been started on port', PORT));