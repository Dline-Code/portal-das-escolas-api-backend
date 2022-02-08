import * as Yup from 'yup';
import { erroExterno, erroInterno, naoEncontrado, ok, proibido } from '../statusHTTP_Values';
import { mensagemDeErroInterno, mensagemDeValidacaoDeCampo } from '../mensagensDeResposta';
import { Request, Response } from 'express';
import UseCaseSchool from './UseCaseSchool/UseCaseSchool';
import CreateSchool from './CreateSchool/CreateSchool';


class SchoolController {
      async store(req: Request, res: Response) {
            try {
              const schema = Yup.object().shape({
                nome: Yup.string().required(),
                numero: Yup.string().required(),
                nif: Yup.string().required(),

              });

              if (!(await schema.isValid(req.body))) {
                return res.status(erroExterno).json(mensagemDeValidacaoDeCampo);
              }

              const {donoId}=req.params

              const { nome,nif,numero } = req.body;

              const permition = await UseCaseSchool.execute({nome,nif,numero,donoId });

              if (permition.status === proibido) {
                return res.status(proibido).json(permition.message);
              }

              if (permition.status === naoEncontrado) {
                return res.status(permition.status).json(permition.message);
              }

              if (permition.status === ok)
                return await CreateSchool.execute({ nome,nif,numero,donoId }, res, req);

                return await CreateSchool.execute({ nome,nif,numero,donoId }, res, req);

            } catch (erro) {
              return res.status(erroInterno).json(mensagemDeErroInterno);
            }
          }
}export default new SchoolController ();
