import { UseCase} from "./UseCase";
import { UseCase as CreateRequestorUseCase } from "../../Requestors/Create/UseCase";
import { Controller} from "./Controller";
import { ContactsRepository } from "../../../repostitories/Contacts/implementations/sqlite/ContactsRepository";
import { RequestorsRepository } from "../../../repostitories/Requestors/implementations/sqlite/RequestorsRepository";

const repository = new ContactsRepository()
const requestorsRepository = new RequestorsRepository()

const creanteContactUseCase = new UseCase(repository);
const createRequestorUseCase = new CreateRequestorUseCase(requestorsRepository)
const createContactController = new Controller(creanteContactUseCase, createRequestorUseCase);

export { creanteContactUseCase, createContactController };