import { IContactsRepository } from "../../IContactsRepository";
import { Contact } from "../../../../entities/Contact";
import prisma from "../../../../../prisma/client";
import { Requestor } from "../../../../entities/Requestor";

export class ContactsRepository implements IContactsRepository{

  async list(): Promise<Contact[]> {
    return (await prisma.contact.findMany({ include: { requestor: true } })).map(ctt => {
      return new Contact({
        ...ctt,
        requestor: new Requestor({
          ...ctt.requestor,
          requested_musics: null,
          contacts: null
        })
      })
    });
  }

  async save(contact: Contact): Promise<Contact> {
    const ctt = await prisma.contact.create({
      data: {
        id: contact.id,
        requestor_id: contact.requestor_id,
        message: contact.message
      },
      include: {
        requestor: true
      }
    })

    const created = new Contact({
      ...ctt,
      requestor: new Requestor({
        ...ctt.requestor,
        requested_musics: null,
        contacts: null
      })
    })

    return created;
  }
}