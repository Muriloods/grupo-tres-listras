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
    const { name, instagram, is_follower, music_name, event_id, dedication } = request.body;
    const req = new Requestor({
      id: null,
      name: !name ? null : name,
      email: null,
      instagram: instagram,
      is_follower: is_follower,
      requested_musics: null,
      contacts: null
    });

    try {
      const createdRequestor = await this.createRequestorUseCase.execute(req);
      const musicRequest = await this.useCase.execute({
        id: null,
        requestor: null,
        requestor_id: createdRequestor.id,
        event: null,
        event_id: request.params.eventId,
        music_name: music_name,
        dedication: !dedication ? null : dedication
      });
      return response.status(201).send(musicRequest);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}