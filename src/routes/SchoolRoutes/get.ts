import { Router } from 'express';
import SchoolController from '../../app/modules/School/SchoolController';

const route = Router();
route.get('/school', SchoolController.get);

module.exports =route
