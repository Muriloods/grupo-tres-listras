import { UseCase } from "./UseCase";
import { Controller } from "./Controller";
import { MusicRequestsRepository } from "../../../repostitories/MusicRequests/implementations/sqlite/MusicRequestsRepository";

const repository = new MusicRequestsRepository()

const listMusicRequestsUseCase = new UseCase(repository);
const findMusicRequestsByEventIdController = new Controller(listMusicRequestsUseCase);

export { listMusicRequestsUseCase, findMusicRequestsByEventIdController };