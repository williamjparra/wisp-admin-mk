import { Client } from "../interfaces/Client.interface";
import nodeModel from "../models/node";

const getNodesService = async () => {
    const response = await nodeModel.find()
    return response
}

const getNodeService = async (id: string) => {
    const response = await nodeModel.findById(id)
    return response
}

const createNodeService = async (body: Client) => {
    const response = await nodeModel.create(body)
    return response
}

const updateNodeService = async (_id: string, body: Client) => {
    const response = await nodeModel.findByIdAndUpdate(_id, body)
    return response
}


const deleteNodeService = async (_id: string) => {
        const response = await nodeModel.findByIdAndRemove(_id)
        return response
}

export {
    getNodeService,
    getNodesService,
    createNodeService,
    updateNodeService,
    deleteNodeService
}