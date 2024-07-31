import { IContactsRepository } from "../../../repostitories/Contacts/IContactsRepository";
import { DTO } from "../DTO";
import { Contact } from "../../../entities/Contact";

export class UseCase {
  constructor(
    private contactsRepository: IContactsRepository
  ) {}

  async execute(): Promise<Contact[]> {
    return await this.contactsRepository.list();
  }
}