var express = require('express');
var router = express.Router();

// controller_file
const indexController = require('../controller/IndexController');

// routing
// router.get('/', indexController.index);
router.get('/', (req, res) => {
  try {
    // localでテストするときはこの2つを入れる(TODO: 後にまとめてプラグインで行う)
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.status(201).send('APIからリターンした値');
  } catch (error) {
      console.error(error);
  }
})
module.exports = router;
