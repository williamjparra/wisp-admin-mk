import { Router } from "express";
import { createClient, deleteClient, getClient, getClients, updateClient } from "../controllers/clients.controllers";

const router = Router()

router.get('/', getClients)
router.get('/:id', getClient)
router.post('/', createClient)
router.put('/:id', updateClient)
router.delete('/:id', deleteClient)

export { router }
