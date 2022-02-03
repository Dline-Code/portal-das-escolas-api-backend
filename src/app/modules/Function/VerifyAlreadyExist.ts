import User from "../../models/User";
import { vazio } from '../statusHTTP_Values';


export default function VerifyAlreadyExist(dataContainer: User) {
  if (!dataContainer) {
    return vazio;
  }
  return 1;
}
