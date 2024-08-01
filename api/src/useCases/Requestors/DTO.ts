import { MusicRequest } from "../../entities/MusicRequest";
import { Contact } from "../../entities/Contact";

export interface DTO {
  id: string | null;
  name: string;
  email: string;
  instagram: string;
  requested_musics: MusicRequest[] | null;
  contacts: Contact[] | null;
  is_follower: boolean;
}