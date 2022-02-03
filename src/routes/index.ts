import { Response,Request, Router } from "express";

const userRoutes = require('./UserRoutes/userRoutes')

const  routes = Router();

routes.get('/',((req:Request, res:Response,)=>{

   return res.status(200).json('well come on https//:portal-das-escolas.api')
}))

routes.use(userRoutes)

export default routes;
