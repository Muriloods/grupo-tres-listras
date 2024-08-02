import { UseCase } from "./UseCase";
import { UseCase as DeleteEventPhotosByEventeUseCase } from '../../EventPhoto/DeleteByEvent/UseCase'
import { Request, Response } from "express";

export class Controller {
  constructor(
    private useCase: UseCase,
    private deleteEventPhotosByEventeUseCase: DeleteEventPhotosByEventeUseCase
  ) {}

  async handle(request: Request, response: Response) {
    try {
      await this.deleteEventPhotosByEventeUseCase.execute(request.params.id);
      const event = await this.useCase.execute(request.params.id);
      return response.status(201).send(event);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}