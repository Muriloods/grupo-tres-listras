import { Contact } from "../../entities/Contact";
export interface IContactsRepository {
  save(contact: Contact): Promise<Contact>;
  list(): Promise<Contact[]>;
  // find(id: string): Promise<Contact>;
}