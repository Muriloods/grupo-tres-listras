import { DTO as RequestorDTO } from "../Requestors/DTO"
import { DTO as EventDTO } from "../Events/DTO";

export interface DTO {
  id: string | null;
  requestor: RequestorDTO | null;
  requestor_id: string;
  event: EventDTO | null;
  event_id: string;
  music_name: string;
  dedication: string;
}