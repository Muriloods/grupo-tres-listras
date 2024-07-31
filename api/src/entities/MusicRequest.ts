import { v4 } from "uuid";
import { Requestor } from "./Requestor";
import { DTO } from "../useCases/MusicRequests/Create/DTO";

export class MusicRequest {
  public readonly id: string;
  public requestor: Requestor | null;
  public event: Event | null;
  public music_name: string;

  constructor(props: DTO) {
    Object.assign(this, props)

    if (!this.id) {
      this.id = v4();
    }
  }
}