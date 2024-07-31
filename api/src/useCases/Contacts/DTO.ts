import { DTO as RequestorDTO } from "../Requestors/Create/DTO"
export interface DTO {
  id: string,
  requestor: RequestorDTO;
  requestor_id: string;
  message: string;
}