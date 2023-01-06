import { Router } from "express";
import { 
    activateClient, 
    activateClients, 
    cutClient, 
    cutClients 
} from "../controllers/actions.controllers";

const router = Router()

router.post('/', activateClients)
router.post('/:id', activateClient)
router.delete('/', cutClients)
router.delete('/:id', cutClient)

export { router }