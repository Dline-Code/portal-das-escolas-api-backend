import { Router } from 'express';
import Signin from '../../app/modules/User/services.ts/Signin/Signin';

const route = Router();
route.post('/signin', Signin.execute);

module.exports =route
