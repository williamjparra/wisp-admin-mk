import { 
    Request, 
    Response 
} from "express";
import { activateClientService, activateClientsService, cutClientService, cutClientsService } from "../services/actions.services";

const activateClients = async (
    req: Request, 
    res: Response) => {

    try {
        const response = await activateClientsService(req.body.ids)
        res.send(response)
    } catch (error) {
        console.log(error)
        res.status(500)
        res.send('there was an error')
    }
}

const activateClient = async (
    req: Request, 
    res: Response) => {
        try {
            const response = await activateClientService(req.params.id)
            res.send(response)
        } catch (error) {
            console.log(error)
            res.status(500)
            res.send('there was an error')
        }
}

const cutClient = async (
    req: Request, 
    res: Response) => {
        try {
            const response = await cutClientService(req.params.id)
            res.send(response)
        } catch (error) {
            console.log(error)
            res.status(500)
            res.send('there was an error')
        }
}

const cutClients = async (
    req: Request, 
    res: Response) => {
        try {
            const response = await cutClientsService(req.body.ids)
            res.send(response)
        } catch (error) {
            console.log(error)
            res.status(500)
            res.send('there was an error')
        }
}

export {
    activateClient,
    activateClients,
    cutClient,
    cutClients
}
