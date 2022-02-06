import { Router } from 'express';
import LoginController from '../../app/modules/Login/LoginController';

const route = Router();
route.post('/login/user/:userId/contact/:contactId', LoginController.store);

module.exports = route;
