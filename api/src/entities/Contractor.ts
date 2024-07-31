import { v4 } from "uuid";
import { DTO } from "../useCases/Contractors/Create/DTO";

export class Contractor {
  public readonly id: string;
  public name: string;
  public email: string;
  public phone: string;
  public events_held: Event[];
  public is_commerce: boolean;

  constructor(props: DTO) {
    Object.assign(this, props)

    if (!this.id) {
      this.id = v4();
    }
  }
}