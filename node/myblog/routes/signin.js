const express = require('express');
const router = express.Router();

router.post('/',function(req,res,next) {
  res.send('登录页面');
});

module.exports = router