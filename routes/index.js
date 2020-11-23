var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});

router.post('/teste', function(req, res, next) {
  if(req.body.teste == 'testar') {
    res.render('index', { title: 'Express', text: 'Testar' });
  }
  else {
    res.render('index', { title: 'Express', text: 'Não testar' });
  }
});

module.exports = router;
