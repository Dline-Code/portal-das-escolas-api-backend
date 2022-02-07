import FindOneContactByDesignacao from './FindContact/FindOneContactByDesignacao';
import Mail from '../../lib/Mail';
import { erroInterno } from '../statusHTTP_Values';
import { Request, Response } from 'express';

class SendEmail {
  async execute(email: string, req: Request, res: Response) {
    const dataEmail = await FindOneContactByDesignacao.execute(email);

    const userData = dataEmail.userId;

    try {
      await Mail.sendMail({
        from: 'Portal das Escolas <dlinecode@gmail.com>',
        to: `${userData.nome} <${email}>`,
        subject: ' Cadastramento de usuário',
        html: `
                            <div width="50%" height="90px" borderRadius="3px" boxShadow="2px 3px 4px #ddd">
                            <p color="#bb00ff">Olá <h2> ${
                              userData.nome
                            }<h2></h3>! você agora já faz parte da nossa plataforma do Portal das escolas!</h3><br>  <hr> <h1> Obrigado por nos escolher!</p>
                            <br><br>
                            <form border=1>
                             <a href=${`localhost:${process.env.PORT}/login`}>
                             <button>Entrar</button>
                             </a>
                            </form>
                            </div>`,
      },console.log(email));
      return res.status(200).json({message:'obrigado.'});
    } catch (err) {
      return res.status(erroInterno).json(err);
    }
  }
}
export default new SendEmail();
