import { Router } from 'express';
const post = require('./post')
const Delete = require('./delete')
const get = require('./get')
const loginRoutes = Router();
const update = require('./update')

loginRoutes.use(post)
loginRoutes.use(Delete)
loginRoutes.use(get)
loginRoutes.use(update)
module.exports = loginRoutes;
