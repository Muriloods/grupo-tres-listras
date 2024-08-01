import { DTO as RequestorDTO } from "../Requestors/DTO"
export interface DTO {
  id: string,
  requestor: RequestorDTO;
  requestor_id: string;
  message: string;
}