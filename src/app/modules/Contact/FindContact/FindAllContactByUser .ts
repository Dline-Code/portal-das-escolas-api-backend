// import ContactRepository from '../../../../repositories/ContactRepository';
// import { getCustomRepository } from 'typeorm';
// import FindOneUserById from '../../User/FindUser/FindOneUserById';
// import { indefinido, vazio } from '../../statusHTTP_Values';

// class FindAllContactByUser {
//   async execute(userId: string, typeContact?: string,limit?:number) {
//     const contactRepository = getCustomRepository(ContactRepository);

//     let contact = await FindOneUserById.execute(userId)

//     let limitLikeIndex = limit - 1;

//     if (limitLikeIndex === vazio && limit !== 1) {
//       return [];
//     }
//     if (limit === 1) limit += 1;

//     limit !== indefinido &&
//       (contact = contact.filter((contacts, index) => index <= limitLikeIndex && contacts));


//     return contact;
//   }
// }
// export default new FindAllContactByUser();
