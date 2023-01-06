import { Request, Response } from "express";

const getClients = async (req: Request, res: Response) => {
    res.send('this is a response')
}

const getClient = async (req: Request, res: Response) => {
    res.send('this is a response')
}

const createClient = async (req: Request, res: Response) => {
    res.send('this is a response')
}

const deleteClient = async (req: Request, res: Response) => {
    res.send('this is a response')
}

const updateClient = async (req: Request, res: Response) => {
    res.send('this is a response')
}

export {
    getClients,
    getClient, 
    deleteClient,
    createClient,
    updateClient
}