import { DTO as RequestorDTO } from "../../Requestors/Create/DTO"
import { DTO as EventDTO } from "../../Events/Create/DTO";

export interface DTO {
  id: string | null;
  requestor: RequestorDTO | null;
  requestor_id: string;
  event: EventDTO;
  music_name: string;
}