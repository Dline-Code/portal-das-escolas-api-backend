import { Router } from 'express';
import LoginController from '../../app/modules/Login/LoginController';

const route = Router();

route.get('/login/userId/:userId', LoginController.get);

module.exports = route;
