import { IRequestorsRepository } from "../../IRequestorsRepository";
import { Requestor } from "../../../../entities/Requestor";
import prisma from "../../../../../prisma/client";

export class RequestorsRepository implements IRequestorsRepository{

  async index(): Promise<Requestor[]> {
    return [];
  }

  async save(requestor: Requestor): Promise<any> {
    return prisma.requestor.create({
      data: {
        id: requestor.id,
        name: requestor.name,
        email: requestor.email,
        instagram: requestor.instagram,
        is_follower: requestor.is_follower
      }
    });
  }

  edit(requestor: Requestor): Promise<any> {
    return prisma.requestor.updateMany({
      where: {
        id: requestor.id
      },
      data: { ...requestor }
    });
  }

  findByEmail(email: string): Promise<any> {
    return prisma.requestor.findUnique({ where: { email } });
  }

  findByInstagram(instagram: string): Promise<any> {
    return prisma.requestor.findUnique({ where: { instagram } });
  }
}