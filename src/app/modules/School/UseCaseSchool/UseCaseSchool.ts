import { getCustomRepository } from 'typeorm';
import ISchool from '../../School/ISchool';
import SchoolRepository from '../../../../repositories/SchoolRepository';
import { ok, proibido, vazio, naoEncontrado } from '../../statusHTTP_Values';
import FindOneUserById from '../../User/FindUser/FindOneUserById';
import { naoEncontrado_msg, jaExistente } from '../../mensagensDeResposta';

class UseCaseSchool {
  async execute(SchoolData: ISchool) {
    try {
      const { nome, nif, numero, donoId } = SchoolData;

      const schoolRepository = getCustomRepository(SchoolRepository);

      const userExist = await FindOneUserById.execute(donoId);

      if (!userExist)
        return {
          status: naoEncontrado,
          message: 'usuário ' + naoEncontrado_msg,
        };
      if (!donoId)
        return {
          status: proibido,
          message: 'selecione um usuario!',
        };

      const schoolAlreadyExist = await schoolRepository.findOne({ where: { nif } });

      if (schoolAlreadyExist) {
        return {
          status: proibido,
          message: jaExistente,
        };
      }

      return {
        status: ok,
        message:'it´s well!'
      };

    } catch (error) {
      console.log(error);
      return {
        error,
        status: 500,
      };
    }
  }
  async onDelete() {}
}
export default new UseCaseSchool();
