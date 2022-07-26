const routes = require('express').Router();
const User = require('../controller/user.controller');


routes.get('/', User.findAllUser)

module.exports = routes
