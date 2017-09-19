const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
var path = require('path');


router.get('/',function(req, res){
    let tweets = tweetBank.list();
    console.log(tweets);
    res.render('index', {tweets: tweets});


});
//router.use( express.static('public'));
console.log(__dirname.split("/").slice(0, -1).join('/'));
router.use( express.static(path.join(__dirname.split("/").slice(0, -1).join('/'), 'public')));

// router.get('/stylesheets/style.css', function(req, res) {
//     //console.log(path.join(__dirname + '/index.html'));
//     res.sendFile( '/Users/rohansaigal/fullstack/junior_phase/workshops/twitter-js/public/stylesheets/style.css' );
// });




module.exports = router;
