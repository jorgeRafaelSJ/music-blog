const express = require('express');
const router = express.Router();

//POST A NEW ARTICLE
router.post('/', (req, res, next)=> {
	console.log('REQ BODY', req.body);
	return res.status(200);
})

module.exports = router;

