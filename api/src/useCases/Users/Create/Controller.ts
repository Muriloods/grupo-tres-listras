import { UseCase } from "./UseCase";
import { Request, Response } from "express";
import bcrypt = require("bcrypt");

export class Controller {
  constructor(
    private useCase: UseCase
  ) {}

  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;
    try {
      const user = await this.useCase.execute({
        id: null,
        name: name,
        email: email,
        password: await bcrypt.hash(password, 10)
      });
      return response.status(201).send(user);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}