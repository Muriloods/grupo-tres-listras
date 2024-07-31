import { v4 } from "uuid";
import { Event } from "./Event";
import { DTO } from "../useCases/EventPhoto/Create/DTO";

export class EventPhoto {
  public readonly id: string;
  public event: Event;
  public photo_url: String;

  constructor(props: DTO) {
    Object.assign(this, props)

    if (!this.id) {
      this.id = v4();
    }
  }
}