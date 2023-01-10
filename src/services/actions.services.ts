import { Client } from "../interfaces/Client.interface"
import clientModel from "../models/client"
import nodeModel from "../models/node"
import { 
    execSSH, 
    execSSHBulk 
} from "../utils/ssh"
import { 
    disableIPCut, 
    disablePPPoe, 
    enableIPCut, 
    enablePPPoe, 
    removePPPOE 
} from "../utils/ssh.commands"

const activateClientService = async (_id: string) => {
    const client = await <Client | any>clientModel.findById(_id)
    if(!client) return new Error('id not found')

    const parentNode = await nodeModel.findById(client.parentNode)
    if (!parentNode) return new Error('node not found')

    if (client?.pppoeName) {
        const command = enablePPPoe(client.pppoeName)
        await execSSH(command, parentNode.address[0])
    } else {
        const command = disableIPCut(client.ip)
        await execSSH(command, parentNode.address[0])
    }

    return `client: ${client.name}, was succesfully activated`
}

const activateClientsService = async (ids: [string]) => {
    const responseMessage = <any>[]
    const commands = <any>[]
    const parentNodes = <any>[]

    ids.forEach(async (_id:string) => {
        const client = await <Client | any>clientModel.findById(_id)
        if(!client) return new Error('id not found')
        
        const parentNode = await nodeModel.findById(client.parentNode)
        if (!parentNode) return new Error('node not found')

        if (client?.pppoeName) {
            commands.push(enablePPPoe(client.pppoeName))
        }
        else {
            commands.push(disableIPCut(client.ip))
        }

        parentNodes.push(parentNode.address[0])
        responseMessage.push(`client: ${client.name}, was succesfully activated`)
    
    })

    await execSSHBulk(commands, parentNodes)

    return responseMessage

}

const cutClientService = async (_id: string) => {
    
    const client = await <Client | any>clientModel.findById(_id)
    if(!client) return new Error('id not found')

    const parentNode = await nodeModel.findById(client.parentNode)
    if (!parentNode) return new Error('node not found')

    if (client?.pppoeName) {
        const command = disablePPPoe(client.pppoeName)
        await execSSH(command, parentNode.address[0])
        await execSSH(removePPPOE(client.pppoeName), parentNode.address[0])
    } else {
        const command = enableIPCut(client.ip)
        await execSSH(command, parentNode.address[0])
    }

    return `client: ${client.name}, was succesfully activated`
    
}

const cutClientsService = async (ids: [string]) => {
    const responseMessage = <any>[]
    const commands = <any>[]
    const parentNodes = <any>[]

    ids.forEach(async (_id:string) => {
        const client = await <Client | any>clientModel.findById(_id)
        if(!client) return new Error('id not found')
        
        const parentNode = await nodeModel.findById(client.parentNode)
        if (!parentNode) return new Error('node not found')

        if (client?.pppoeName) {
            commands.push(disablePPPoe(client.pppoeName))
            commands.push(removePPPOE(client.pppoeName))
            parentNodes.push(parentNode.address[0])
        }
        else {
            commands.push(enableIPCut(client.ip))
        }        
        parentNodes.push(parentNode.address[0])
        responseMessage.push(`client: ${client.name}, was succesfully activated`)
    })

    await execSSHBulk(commands, parentNodes)

    return responseMessage
}

export {
    activateClientService,
    activateClientsService,
    cutClientService,
    cutClientsService
}