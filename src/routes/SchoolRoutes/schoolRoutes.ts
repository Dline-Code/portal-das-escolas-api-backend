import { Router } from 'express';
const post = require('./post');
const get = require('./get');
const schoolRoutes = Router();

schoolRoutes.use(post);
schoolRoutes.use(get);
module.exports = schoolRoutes;
