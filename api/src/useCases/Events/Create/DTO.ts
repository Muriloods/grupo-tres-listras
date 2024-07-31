import { Contractor } from "../../../entities/Contractor";
import { EventPhoto } from "../../../entities/EventPhoto";
import { DTO as MusicRequestDTO } from "../../MusicRequests/Create/DTO";
import { DTO as ContractorDTO} from "../../Contractors/Create/DTO";
import { DTO as EventPhotoDTO} from "../../EventPhoto/Create/DTO";

export interface DTO {
  id: string | null,
  name: string;
  contractor: ContractorDTO;
  date: Date;
  folder_url: string;
  description: string;
  photos: EventPhotoDTO[];
  is_private: boolean;
  requested_musics: MusicRequestDTO[]
}