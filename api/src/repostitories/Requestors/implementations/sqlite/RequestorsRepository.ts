import { IRequestorsRepository } from "../../IRequestorsRepository";
import { Requestor } from "../../../../entities/Requestor";
import prisma from "../../../../../prisma/client";

export class RequestorsRepository implements IRequestorsRepository{

  async index(): Promise<Requestor[]> {
    return [];
  }

  async save(requestor: Requestor): Promise<any> {
    const req = prisma.requestor.create({
      data: {
        id: requestor.id,
        name: requestor.name,
        email: requestor.email,
        instagram: requestor.instagram,
        is_follower: requestor.is_follower
      }
    })
    return req;
  }

  edit(requestor: Requestor): Promise<any> {
    const req = prisma.requestor.updateMany({
      where: {
        id: requestor.id
      },
      data: {...requestor}
    });

    return req;
  }

  findByEmail(email: string): Promise<any> {
    return prisma.requestor.findUnique({ where: { email } });
  }
}