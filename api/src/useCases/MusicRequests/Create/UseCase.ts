import { IMusicRequestsRepository } from "../../../repostitories/MusicRequests/IMusicRequestsRepository";
import { DTO } from "../DTO";
import { MusicRequest } from "../../../entities/MusicRequest";

export class UseCase {
  constructor(
    private musicRequestsRepository: IMusicRequestsRepository
  ) {}

  async execute(data: DTO): Promise<MusicRequest> {
    const musicRequest = new MusicRequest(data);
    return await this.musicRequestsRepository.save(musicRequest);
  }
}