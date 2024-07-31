import { v4 } from "uuid";
import { Contractor } from "./Contractor";
import { EventPhoto } from "./EventPhoto";
import { MusicRequest } from "./MusicRequest";
import { DTO } from "../useCases/Events/Create/DTO";

export class Event {
  public readonly id: string;
  public name: string;
  public contractor: Contractor;
  public date: Date;
  public folder_url: string;
  public description: string;
  public photos: EventPhoto[];
  public is_private: boolean;
  public requested_musics: MusicRequest[]

  constructor(props: DTO) {
    Object.assign(this, props)

    if (!this.id) {
      this.id = v4();
    }
  }
}