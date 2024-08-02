import { UseCase } from "./UseCase";
import { Request, Response } from "express";

export class Controller {
  constructor(
    private useCase: UseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;
    try {
      const user = await this.useCase.execute({
        email: email,
        password: password
      });
      return response.status(201).send(user);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}