import { IRequestorsRepository } from "../../../repostitories/Requestors/IRequestorsRepository";
import { DTO } from "../DTO";
import { Requestor } from "../../../entities/Requestor";

export class UseCase {
  constructor(
    private requestorsRepository: IRequestorsRepository
  ) {}

  async execute(data: DTO): Promise<Requestor> {
    const requestor = new Requestor(data);
    const existingRequestor = await this.requestorsRepository.findByEmail(requestor.email)
    if (existingRequestor) {
      existingRequestor.name = requestor.name;
      existingRequestor.email = requestor.email;
      existingRequestor.instagram = requestor.instagram;

      await this.requestorsRepository.edit(existingRequestor);
      return existingRequestor;
    }

    return await this.requestorsRepository.save(requestor);
  }
}