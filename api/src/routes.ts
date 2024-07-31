import { Router } from "express";
import { createContactController } from "./useCases/Contacts/Create";
import { listCntactsController } from "./useCases/Contacts/List";

const router = Router();
router.route('/contact').
  post((req, res) => {
    return createContactController.handle(req, res);
  })
  .get((req, res) => {
    return listCntactsController.handle(req, res);
  });

export default router;