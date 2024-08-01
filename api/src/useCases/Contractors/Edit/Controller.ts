import { UseCase } from "./UseCase";
import { Request, Response } from "express";

export class Controller {
  constructor(
    private useCase: UseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { name, email, phone, is_commerce } = request.body;
    const cont = {
      id: request.params.id,
      name: name,
      email: email,
      phone: phone,
      is_commerce: !!is_commerce,
      events_held: null
    }

    try {
      const contractor = await this.useCase.execute(cont);
      return response.status(201).send(contractor);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}