import LoginRepository from '../../../../../../repositories/LoginRepository';
import { getCustomRepository } from 'typeorm';
import FindOneContactByDesignacao from '../../../../Contact/FindContact/FindOneContactByDesignacao';
import { erroInterno, naoAutorizado, vazio } from '../../../../statusHTTP_Values';
import { mensagemDeErroInterno } from '../../../../mensagensDeResposta';
import VerifyAlreadyExist from '../../../../Function/VerifyAlreadyExist';

class FindLogin {
  async execute(email: string, password: string) {
    try {
      const loginRepository = getCustomRepository(LoginRepository);
      const contact = await FindOneContactByDesignacao.execute(email);
      const LoginWithEmail = await loginRepository.findOne({
        where: { contactId: contact.id },
      });
      console.log('LOGIN=>>', LoginWithEmail);
      const { id, userId, contactId } = LoginWithEmail;
      const existLogin = VerifyAlreadyExist(LoginWithEmail);

      if (existLogin === vazio) {
        return {
          status: naoAutorizado,
          message: 'Login inválido',
        };
      }
      if (LoginWithEmail.password !== password) {
        return {
          status: naoAutorizado,
          message: 'Login inválido ou senha',
        };
      }
      return {
        id,
        userId,
        contactId,
      };
    } catch (error) {
      return {
        status: erroInterno,
        message: mensagemDeErroInterno + error,
      };
    }
  }
}
export default new FindLogin();
