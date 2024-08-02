import { IMusicRequestsRepository } from "../../../repostitories/MusicRequests/IMusicRequestsRepository";
import { MusicRequest } from "../../../entities/MusicRequest";

export class UseCase {
  constructor(
    private musicRequestsRepository: IMusicRequestsRepository
  ) {}

  async execute(eventId: string): Promise<MusicRequest[]> {
    return await this.musicRequestsRepository.findByEventId(eventId);
  }
}