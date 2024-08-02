import { UseCase} from "./UseCase";
import { UseCase as CreateRequestorUseCase } from "../../Requestors/Create/UseCase";
import { Controller} from "./Controller";
import { MusicRequestsRepository } from "../../../repostitories/MusicRequests/implementations/sqlite/MusicRequestsRepository";
import { RequestorsRepository } from "../../../repostitories/Requestors/implementations/sqlite/RequestorsRepository";

const repository = new MusicRequestsRepository()
const requestorsRepository = new RequestorsRepository()

const creanteMusicRequestUseCase = new UseCase(repository);
const createRequestorUseCase = new CreateRequestorUseCase(requestorsRepository)
const createMusicRequestController = new Controller(creanteMusicRequestUseCase, createRequestorUseCase);

export { creanteMusicRequestUseCase, createMusicRequestController };