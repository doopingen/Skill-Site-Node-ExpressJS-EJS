const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));

router.get('/contact', function(req, res) {
    res.render('contact', {
        fname: 'Clay',
        lname: 'Darland',
        email: 'clay@darland.info',
        github: 'doopingen',
    });
});

router.get('/skills', function(req, res) {  
    res.render('skills', {
        myJS: ['ExpressJS', 'ES5', 'ES6', 'NodeJS' ],
        myCSS: ['Bootstrap', 'Materialize', 'UIKIT'],
        myHTML: ['HTML5', 'HTML5 Canvas' ]
    });
});

module.exports = router;