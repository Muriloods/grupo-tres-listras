import { Contractor } from "../entities/Contractor";
export interface IContractorsRepository {
  index(): Promise<Contractor[]>;
  save(contact: Contractor): Promise<Contractor>;
  edit(contact: Contractor): Promise<Contractor>;
  delete(contact: Contractor): Promise<Contractor>;
  find(id: string): Promise<Contractor>;
}