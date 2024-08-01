import { EventPhoto } from "../../entities/EventPhoto";
export interface IEventPhotosRepository {
  saveMany(photos: EventPhoto[]): Promise<void>;
  deleteAll(): Promise<void>;
}