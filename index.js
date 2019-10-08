//Require ExpressJS
const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;

//Set the view engine
app.set('view engine', 'ejs');

//Set the view directory
app.set('views', './views');

//Serve static stylesheet middleware 
// app.use(express.static('./public'));//Skill-Site-Node-ExpressJS-EJS/public/images
// app.use(express.static('./public/stylesheets'));

app.use("/images", express.static(__dirname + '/public/images'));
app.use("/css", express.static(__dirname + '/public/stylesheets'));

//Imports page routes
require('./routes/routes.js')(app);

//Listening port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))