const router = require('express').Router();
const db = require('../config/db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM users',
    (err, result) => {
      if (err) throw err;
      else {
        console.log(result);
        res.render('index', { result });
      };
    });
});

module.exports = router;