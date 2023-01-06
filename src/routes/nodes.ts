import { Router } from "express";
import { 
    createNode, 
    deleteNode, 
    getNode, 
    getNodes, 
    updateNode 
} from "../controllers/nodes.controllers";

const router = Router()

router.get('/', getNodes)
router.get('/:id', getNode)
router.post('/', createNode)
router.put('/:id', updateNode)
router.delete('/:id', deleteNode)

export { router }