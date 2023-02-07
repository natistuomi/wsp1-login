const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const pool = require('../utils/database');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.njk', { title: 'Login ALC' });
});

router.get('/login', function(req, res, next) {
    res.render('login.njk', { title: 'Login ALC' });
});

router.post('/login', async function(req, res, next) {
    const { username, password} = req.body;
    
    if (username.length === 0 && password.length === 0) {
        res.json('Username AND Password is Required')
        console.log('HAHAHAHAHAHAHHHAZGHHHAAH')
    }

    if (username.length === 0) {
        res.json('Username is Required')
        console.log('hejhehj')
    }

    if (password.length === 0) {
        res.json('Password is Required')
        console.log('AAAHHHHHHHHHHHH!!!!')
    }


    
    
    bcrypt.hash(password, 10, function (err, hash){
    
        console.log(hash);
        return res.json(hash);
    });

    await promisePool.query('INSERT INTO hgusers (username, password) VALUES (?, ?)', [username, hash]);

});

module.exports = router;
