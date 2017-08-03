var express = require('express');
var router = express.Router();
var wifi = require('../WiFiScan');

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
    res.render('index', { title: 'Members' });
});

router.get('/api/wifi', ensureAuthenticated,function(req, res, next) {
	wifi.wifiScanner((networks) => {
		res.json(networks);
	})
});

router.get('/api/speed', ensureAuthenticated,function(req, res, next) {
	wifi.testSpeed((speed) => {
		res.json(speed);
	})
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/users/login');
}

module.exports = router;