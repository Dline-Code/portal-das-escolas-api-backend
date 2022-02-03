import { Response,Request, Router } from "express";

const contactRoutes = require('./ContactRoutes/contactRoutes')
const userRoutes = require('./UserRoutes/userRoutes')
const  routes = Router();

routes.get('/',((req:Request, res:Response,)=>{

   return res.status(200).json('well come on https//:portal-das-escolas.api')
}))

routes.use(userRoutes)

routes.use(contactRoutes)

export default routes;
