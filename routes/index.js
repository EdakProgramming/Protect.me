var express = require('express');
var router = express.Router();
var wifi = require('../WiFiScan');

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
    res.render('index', { title: 'Members' });
});

router.get('/api/wifi', function(req, res, next) {
	wifi.wifiScanner((networks) => {
		res.json(networks);
	})
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/users/login');
}

module.exports = router;