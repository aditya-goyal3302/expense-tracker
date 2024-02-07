const express = require('express');
const admincontroller = require('../Controllers/admin');
const auth = require('../Controllers/auth');
const router = express.Router();


router.post('/get-data',admincontroller.postgetdata);

router.get('/isauth',auth.verify,auth.isauth);

router.post('/signup',auth.signup);

router.post('/login',auth.login);

module.exports = router;




