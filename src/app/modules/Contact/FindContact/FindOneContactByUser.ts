import ContactRepository from '../../../../repositories/ContactRepository';
import { getCustomRepository } from 'typeorm';
import FindOneUserById from '../../User/FindUser/FindOneUserById';

class FindOneContactByUser {
  async execute(userId: string,typeContact?:string) {

    const contactRepository = getCustomRepository(ContactRepository);

    const user = await FindOneUserById.execute(userId);

    const contact = await contactRepository.findOne({ where: { userId: user } });

    return contact;
  }
}
export default new FindOneContactByUser();
