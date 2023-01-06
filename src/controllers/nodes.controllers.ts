import { Request, Response } from "express";

const getNodes = async (req: Request, res: Response) => {
    res.send('this is a response')
}

const getNode = async (req: Request, res: Response) => {
    res.send('this is a response')
}

const createNode = async (req: Request, res: Response) => {
    res.send('this is a response')
}

const deleteNode = async (req: Request, res: Response) => {
    res.send('this is a response')
}

const updateNode = async (req: Request, res: Response) => {
    res.send('this is a response')
}

export {
    getNodes,
    getNode, 
    deleteNode,
    createNode,
    updateNode
}

