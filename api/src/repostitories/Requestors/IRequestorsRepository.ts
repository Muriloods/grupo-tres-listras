import { Requestor } from "../../entities/Requestor";
export interface IRequestorsRepository {
  index(): Promise<Requestor[]>;
  save(requestor: Requestor): Promise<Requestor>;
  edit(requestor: Requestor): Promise<Requestor>;
  findByEmail(email: string): Promise<Requestor>;
  findByInstagram(insta: string): Promise<Requestor>;
  // find(id: string): Promise<Requestor>;
}