import { IContactsRepository } from "../../../repostitories/Contacts/IContactsRepository";
import { DTO } from "../DTO";
import { Contact } from "../../../entities/Contact";

export class UseCase {
  constructor(
    private contactsRepository: IContactsRepository
  ) {}

  async execute(data: DTO): Promise<Contact> {
    const contact = new Contact(data);
    return await this.contactsRepository.save(contact);
  }
}