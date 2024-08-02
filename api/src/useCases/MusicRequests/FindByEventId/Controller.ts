import { UseCase } from "./UseCase";
import { Request, Response } from "express";

export class Controller {
  constructor(
    private useCase: UseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const musicRequests = await this.useCase.execute(request.params.eventId);
      return response.status(201).send(musicRequests);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}