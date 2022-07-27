const router = require('express').Router();
const Auth = require('../controller/auth.controller');

router.post('/', Auth.authUser);

module.exports = router;
