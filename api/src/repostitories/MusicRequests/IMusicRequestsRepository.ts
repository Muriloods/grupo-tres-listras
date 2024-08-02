import { MusicRequest } from "../../entities/MusicRequest";
export interface IMusicRequestsRepository {
  save(musicRequest: MusicRequest): Promise<MusicRequest>;
  list(): Promise<MusicRequest[]>
  findByEventId(eventId: string): Promise<MusicRequest[]>
}