import { v4 } from "uuid";
import { Requestor } from "./Requestor";
import { DTO } from "../useCases/MusicRequests/DTO";

export class MusicRequest {
  public readonly id: string;
  public requestor: Requestor | null;
  public requestor_id: string;
  public event: Event | null;
  public event_id: string;
  public music_name: string;
  public dedication: string | null;

  constructor(props: DTO) {
    Object.assign(this, props)

    if (!this.id) {
      this.id = v4();
    }
  }
}