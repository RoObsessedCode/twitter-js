const express = require( 'express' );
const nunjucks = require('nunjucks');
const app = express();
const volleyball = require('volleyball');

const locals = {
    title: 'An Example',
    people: [
        {name: 'Gandalf'},
        {name: 'Frodo'},
        {name: 'Hermione'}
    ]
};

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views');

app.use(volleyball);

app.use(function(req, resp, next) {
    console.log('this is middleware');
    next();
});

app.get('/', (req, resp) => {
    //resp.send('welcome');
    console.log('hitting home route');
    //resp.send("waddup Evan")
    resp.render('index.html', locals);
});


app.use('/mitch', (req, resp, next) => {
   resp.send('mitch is dope dope dope');
});

app.listen(3000, function(){
    console.log('Listening on port 3000 now...');
});
