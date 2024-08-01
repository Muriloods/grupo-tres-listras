import { Router } from "express";
//contact
import { createContactController } from "./useCases/Contacts/Create";
import { listCntactsController } from "./useCases/Contacts/List";

//contrator
import { createContractorController } from "./useCases/Contractors/Create";
import { listContractorsController } from "./useCases/Contractors/List";
import { findContractorsController } from "./useCases/Contractors/Find";
import { deleteContractorsController } from "./useCases/Contractors/Delete";
import { editContractorsController } from "./useCases/Contractors/Edit";

const router = Router();
router.route('/contact')
  .post((req, res) => {
    return createContactController.handle(req, res);
  })
  .get((req, res) => {
    return listCntactsController.handle(req, res);
  });

//contractors
router.route('/contractor')
  .post((req, res) => {
    return createContractorController.handle(req, res);
  })
  .get((req, res) => {
    return listContractorsController.handle(req, res);
  });

router.route('/contractor/:id')
  .get( (req, res) => {
    return findContractorsController.handle(req, res);
  })
  .put((req, res) => {
    return editContractorsController.handle(req, res);
  })
  .delete((req, res) => {
    return deleteContractorsController.handle(req, res);
  })
//

export default router;