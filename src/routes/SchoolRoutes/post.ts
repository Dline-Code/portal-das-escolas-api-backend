import { Router } from 'express';
import SchoolController from '../../app/modules/School/SchoolController';

const route = Router();
route.post('/school/userId/:donoId', SchoolController.store);

module.exports =route
