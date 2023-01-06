import { Request, Response } from "express";

const activateClients = async (req: Request, res: Response) => {
    res.send('this is a response')
}

const activateClient = async (req: Request, res: Response) => {
    res.send('this is a response')
}

const cutClient = async (req: Request, res: Response) => {
    res.send('this is a response')
}

const cutClients = async (req: Request, res: Response) => {
    res.send('this is a response')
}

export {
    activateClient,
    activateClients,
    cutClient,
    cutClients
}
