import { Router } from 'express';
import ContactController from '../../app/modules/Contact/ContactController';

const route = Router();

route.delete('/contact', ContactController.get);
route.delete('/contact/id/:id', ContactController.get);

module.exports = route;
