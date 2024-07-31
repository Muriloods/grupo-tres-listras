import { DTO as ContractorDTO } from "../../Contractors/Create/DTO";
import { EventPhoto } from "../../../entities/EventPhoto";
import { DTO as EventDTO } from "../../Events/Create/DTO";

export interface DTO {
  id: string;
  event: EventDTO;
  photo_url: String;
}