import { DTO as EventDTO } from "../Events/Create/DTO";

export interface DTO {
  id: string;
  event_id: string;
  event: EventDTO;
  photo_url: String;
}