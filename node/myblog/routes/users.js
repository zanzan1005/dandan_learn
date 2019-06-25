const express = require('express');
const router = express.Router();

  router.get('/:name',function(req,res) {
    res.render('users',{
      name: req.params.name,
      supplies: ['小鲤鱼','大鲤鱼','中鲤鱼']
    })
  })

  module.exports = router;