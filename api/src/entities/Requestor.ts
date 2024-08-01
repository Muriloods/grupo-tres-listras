import { v4 } from "uuid";
import { MusicRequest } from "./MusicRequest";
import { Contact } from "./Contact";
import { DTO } from "../useCases/Requestors/DTO";

export class Requestor {
  public readonly id: string;
  public name: string;
  public email: string;
  public instagram: string;
  public requested_musics: MusicRequest[] | null;
  public is_follower: boolean;
  public contacts: Contact[] | null;

  constructor(props: DTO) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.instagram = props.instagram;
    this.requested_musics = props.requested_musics ? props.requested_musics : [];
    this.is_follower = props.is_follower;
    this.contacts = props.contacts ? props.contacts : [];

    if (!this.id) {
      this.id = v4();
    }
  }
}