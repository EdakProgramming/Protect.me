var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: './uploads' });

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
    res.render('register', { title: 'Register' });
});

//
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

router.post('/register', upload.single('profileimage'), function(req, res, next) {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    //after submission of the file this checks if there was
    if (req.file) {
        //if there was an image uploaded it will save it into a variable
        console.log('Uploading File...');
        var profileImage = req.file.filename;
    } else {
        //if there was no image uploaded we will have a default image set
        console.log('No File Uploaded...');
        var profileImage = 'noimage.jpeg';
    }


    //form validator

    req.checkBody('name', 'Name field is required').notEmpty();
    req.checkBody('email', 'Email field is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'Username field is required').notEmpty();
    req.checkBody('password', 'Password field is required').notEmpty();
    //this is to make sure the password and the confirm password match.
    req.checkBody('password2', 'Password do not match').equals(req.body.password);

    //check errors
    var errors = req.validationErrors();

    console.log(errors);

    if (errors) {
    	res.render('register', {
    		errors
    	});
    } else {
        console.log('No errors');
    }

});

module.exports = router;