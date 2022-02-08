import SchoolRepository from '../../../../repositories/SchoolRepository';
import { getCustomRepository } from 'typeorm';
import { indefinido, vazio } from '../../statusHTTP_Values';

class FindAllSchools {
  async execute(limit?: number) {
    const schoolRepository = getCustomRepository(SchoolRepository);

    let school = await schoolRepository.find();

    let limitLikeIndex = limit - 1;

    if (limitLikeIndex === vazio && limit !== 1) {
      return [];
    }
    if (limit === 1) limit += 1;

    limit !== indefinido &&
      (school = school.filter((School, index) => index <= limitLikeIndex && School));

    return school;
  }
}
export default new FindAllSchools();
