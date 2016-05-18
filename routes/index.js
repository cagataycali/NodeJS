var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wup', function(req, res, next) {
  res.render('index', {title: 'What\'s up bro'});
});

router.get('/thx', function (req, res) {
  res.render('index', {title: 'Thx dude.'});
});

router.get('/turkish', function(req, res) {
  res.render('turkish', {title: 'Selamlaşma', turkish: 'İyiyim sen nasılsın, bende iyiyim. Ee daha daha nasılsın?'})
});

router.get('/next/a', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from A!');
});

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.json('Hello from C!');
}

router.get('/example/c', [cb0, cb1, cb2]);


router.route('/book')
  .get(function(req, res) {
    res.json('Get a random book');
  })
  .post(function(req, res) {
    res.json('Add a book');
  })
  .put(function(req, res) {
    res.json('Update the book');
  });


module.exports = router;
