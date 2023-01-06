import { Request, Response } from "express";
import { createNodeService, deleteNodeService, getNodeService, getNodesService, updateNodeService } from "../services/node.services";


const getNodes = async (req: Request, res: Response) => {
    try {
        const response = await getNodesService()
        res.status(200)
        res.json(response)
    } catch (error) {
        console.log(error)
        res.status(404)
        res.send('there was an error')
    }
}

const getNode = async (req: Request, res: Response) => {
    try {
        const { params } = req
        const response = await getNodeService(params.id)
        res.status(200)
        res.json(response)
    } catch (error) {
        console.log(error)
        res.status(404)
        res.send('there was an error')
    }
}

const createNode = async (req: Request, res: Response) => {
    try {
        const { body } = req
        const response = await createNodeService(body)
        res.status(200)
        res.json(response)
    } catch (error) {
        console.log(error)
        res.send('there was an error')
    }
}

const deleteNode = async (req: Request, res: Response) => {
    try {
        const { params } = req
        const response = await deleteNodeService(params.id)
        res.status(200)
        res.json(response)
    } catch (error) {
        console.log(error)
        res.send('there was an error')
    }
}

const updateNode = async (req: Request, res: Response) => {
    try {
        const { params, body } = req
        const response = await updateNodeService(params.id, body)
        res.status(200)
        res.json(response) 
    } catch (error) {
        console.log(error)
        res.send('there was an error')
    }
}

export {
    getNodes,
    getNode, 
    deleteNode,
    createNode,
    updateNode
}

