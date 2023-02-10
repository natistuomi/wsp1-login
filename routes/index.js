const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const pool = require('../utils/database');
const promisePool = pool.promise();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index.njk', { title: 'Login ALC' });
});

router.get('/login', function (req, res, next) {
    res.render('login.njk', { title: 'Login ALC' });
});

router.post('/login', async function (req, res, next) {
    const { username, password } = req.body;

    if (username.length === 0) {
        res.json('Username is Required')
    }

    else if (password.length === 0) {
        res.json('Password is Required')
    }
    else{
        const [rowsname, query] = await promisePool.query('SELECT name FROM hgusers WHERE name = ?', [username]);
        console.log(rowsname);
        if(rowsname.length > 0 ){
            const [rows, query] = await promisePool.query('SELECT password FROM hgusers WHERE name = ?', [username]);
        
            console.log(rows[0].password)

            const bcryptPassword = rows[0].password

            bcrypt.compare(password, bcryptPassword , function(err, result) {
                /*res.json({result})*/
                if(result){
                    res.redirect('/profile');
                }
                else{
                    res.redirect('/login');
                }
            });
        }
        else{
            res.redirect('/login');
        }
        
    }


    /* else {
        bcrypt.hash(password, 10, function (err, hash) {

            console.log(hash);
            return res.json(hash);

        });

        await promisePool.query('INSERT INTO hgusers (username, password) VALUES (?, ?)', [username, test]);
    } */
});

router.get('/bcrypt/:pwd', function (req, res ,next){
    
    console.log(req.params.pwd)

    bcrypt.hash(req.params.pwd, 10, function (err, hash) {

        console.log(hash);
        return res.json(hash);

    });
});

router.get('/profile/:name', function(req, res, next){
    res.json(':)');
});

module.exports = router;
