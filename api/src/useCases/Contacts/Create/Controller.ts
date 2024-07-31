import { UseCase } from "./UseCase";
import { UseCase as CreateRequestorUseCase } from "../../Requestors/Create/UseCase";
import { Requestor } from "../../../entities/Requestor";
import { Request, Response } from "express";

export class Controller {
  constructor(
    private useCase: UseCase,
    private createRequestorUseCase: CreateRequestorUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { name, email, instagram, message } = request.body;
    const req = new Requestor({
      id: null,
      name: name,
      email: email,
      instagram: instagram,
      is_follower: false,
      requested_musics: null,
      contacts: null
    });

    try {
      const createdRequestor = await this.createRequestorUseCase.execute(req);
      const contact = await this.useCase.execute({
        id: null,
        requestor_id: createdRequestor.id,
        requestor: createdRequestor,
        message: message
      });
      return response.status(201).send(contact);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}