import { DTO as EventsDTO } from "../../Events/Create/DTO"
export interface DTO {
  id: string | null;
  name: string;
  email: string;
  phone: string;
  events_held: EventsDTO[];
  is_commerce: boolean;
}