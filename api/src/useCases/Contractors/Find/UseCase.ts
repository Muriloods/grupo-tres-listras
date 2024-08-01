import { IContractorsRepository } from "../../../repostitories/Contractors/IContractorsRepository";
import { Contractor } from "../../../entities/Contractor";
import { DTO } from "../DTO";

export class UseCase {
  constructor(
    private contractorsRepository: IContractorsRepository
  ) {}

  async execute(id: string): Promise<Contractor> {
    return await this.contractorsRepository.find(id);
  }
}