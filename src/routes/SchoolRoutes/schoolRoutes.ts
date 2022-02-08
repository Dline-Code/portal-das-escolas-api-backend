import { Router } from 'express';
const post = require('./post');
const schoolRoutes = Router();

schoolRoutes.use(post);
module.exports = schoolRoutes;
