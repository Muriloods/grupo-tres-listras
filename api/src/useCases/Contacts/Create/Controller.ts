import { UseCase } from "./UseCase";
import { UseCase as CreateRequestorUseCase } from "../../Requestors/Create/UseCase";
import { Requestor } from "../../../entities/Requestor";
import { Request, Response } from "express";
import { UnauthorizedError } from "../../../helpers/api-errors";

export class Controller {
  constructor(
    private useCase: UseCase,
    private createRequestorUseCase: CreateRequestorUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { name, email, message } = request.body;
    const req = new Requestor({
      id: null,
      name: name,
      email: email,
      instagram: null,
      is_follower: false,
      requested_musics: null,
      contacts: null
    });

    const createdRequestor = await this.createRequestorUseCase.execute(req);
    const contact = await this.useCase.execute({
      id: null,
      requestor_id: createdRequestor.id,
      requestor: createdRequestor,
      message: message
    });
    return response.send(contact);
  }
}