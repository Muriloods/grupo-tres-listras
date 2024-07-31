import { UseCase} from "./UseCase";
import { Controller} from "./Controller";
import { ContactsRepository } from "../../../repostitories/Contacts/implementations/sqlite/ContactsRepository";

const repository = new ContactsRepository()

const listContactsUseCase = new UseCase(repository);
const listCntactsController = new Controller(listContactsUseCase);

export { listContactsUseCase, listCntactsController };