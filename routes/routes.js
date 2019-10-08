module.exports = function(app){

    //ES6 arrow function test
    app.get('/', (req, res) => res.render('index'));

    app.get('/contact', function(req, res) {
        res.render('contact');
    });

    app.get('/skills', function(req, res) {
        res.render('skills');
    });

    //other routes TBD..
}