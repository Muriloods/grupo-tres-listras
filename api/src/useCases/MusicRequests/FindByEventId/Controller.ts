import { UseCase } from "./UseCase";
import { Request, Response } from "express";

export class Controller {
  constructor(
    private useCase: UseCase
  ) {}

  async handle(request: Request, response: Response) {
    const musicRequests = await this.useCase.execute(request.params.eventId);
    return response.send(musicRequests);
  }
}