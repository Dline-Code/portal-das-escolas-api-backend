import { Request, Response } from 'express';
import * as Yup from 'yup';
import { mensagemDeErroInterno, mensagemDeValidacaoDeCampo } from '../mensagensDeResposta';
import { erroExterno, erroInterno, naoEncontrado, ok, proibido } from '../statusHTTP_Values';
import CreateDataLogin from './CreateDataLogin/CreateDataLogin';
import UseCaseDataLogin from './UseCaseDataLogin/UseCaseDataLogin';

class LoginController {
  async store(req: Request, res: Response) {
    try {
      const schema = Yup.object().shape({
        designacao: Yup.string().required(),
        descricao: Yup.string(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(erroExterno).json(mensagemDeValidacaoDeCampo);
      }

      const { password } = req.body;
      const { userId, contactId } = req.params;

      const permition = await UseCaseDataLogin.execute({ password, contactId, userId });

      if (permition.status === proibido) {
        return res.status(proibido).json(permition.status);
      }

      if (permition.status === naoEncontrado) {
        return res.status(permition.status).json(permition.message);
      }
      if (permition.status === ok)
        return await CreateDataLogin.execute({ password, contactId, userId }, res, req);

      return await CreateDataLogin.execute({ password, contactId, userId }, res, req);
    } catch (erro) {
      return res.status(erroInterno).json(mensagemDeErroInterno);
    }
  }
}
export default new LoginController ()
