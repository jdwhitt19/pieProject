const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.send('I love pie'));

module.exports = router;