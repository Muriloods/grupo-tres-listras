import { v4 } from "uuid";
import { Requestor } from "./Requestor";
import { DTO } from "../useCases/Contacts/DTO";

export class Contact {
  public readonly id: string;
  public requestor: Requestor;
  public requestor_id: string;
  public message: string;

  constructor(props: DTO) {
    this.id = props.id;
    this.message = props.message;
    this.requestor = props.requestor;
    this.requestor_id = this.requestor.id

    if (!this.id) {
      this.id = v4();
    }
  }
}