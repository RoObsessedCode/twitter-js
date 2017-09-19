const express = require( 'express' );
const nunjucks = require('nunjucks');
const app = express();
const volleyball = require('volleyball');
const routes = require('./routes')

app.use('/',routes);

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views');


const people = [{name: "Full"}, {name: 'Stacker'}, {name: "Son"}];


app.get('/', (req, res) => {
    console.log('hitting home route');
    res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.use(function(req, res, next) {
    console.log('this is middleware');
    next();
});

app.use('/mitch', (req, res, next) => {
   res.send('mitch is dope dope dope');
});

app.listen(3000, function(){
    console.log('Listening on port 3000 now...');
});
