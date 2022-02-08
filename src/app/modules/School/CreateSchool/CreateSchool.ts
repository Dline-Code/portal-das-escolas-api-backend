import { erroInterno, ok, vazio, naoEncontrado } from '../../statusHTTP_Values';
import SchoolRepository from '../../../../repositories/SchoolRepository';
import { getCustomRepository } from 'typeorm';
import { mensagemDeErroInterno, naoEncontrado_msg } from '../../mensagensDeResposta';
import { Response, Request } from 'express';
import UserRepository from '../../../../repositories/UserRepository';

import VerifyAlreadyExist from '../../Function/VerifyAlreadyExist';
import ISchool from '../ISchool';



class CreateSchool {
  async execute(SchoolData: ISchool, res: Response, req: Request) {
    try {
      const schoolRepository = getCustomRepository(SchoolRepository);
      const userRepository = getCustomRepository(UserRepository);
      const { nome, donoId, numero, nif } = SchoolData;

      const user = await userRepository.findOne({ where: { id: SchoolData.donoId } });

      const schoolCreated = schoolRepository.create({
        nome,
        nif,
        numero,
        donoId: user.id,
      });

      const schoolSeved = await schoolRepository.save(schoolCreated);

      return res.status(ok).json(schoolSeved);
    } catch (erro) {
      console.log(erro);
      return res.status(erroInterno).json(mensagemDeErroInterno);
    }
  }
}
export default new CreateSchool();
