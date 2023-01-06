import clientModel from "../models/client"
import nodeModel from "../models/node"
import { execSSH, execSSHBulk } from "../utils/ssh"

const activateClientService = async (_id: string) => {
    const client = await clientModel.findById(_id)

    if(!client) return new Error('id not found')

    const parentNode = await nodeModel.findById(client.parentNode)

    if (!parentNode) return new Error('node not found')

    if (client?.pppoeName) {
        const command = `ppp secret set ${client.pppoeName} disabled=no`
        await execSSH(command, parentNode.address[0])
        return `client: ${client.name}, was succesfully activated`
    }

    const command = `ip firewall address-list set disabled=yes address=${client.ip} list=cortes numbers=0`
    await execSSH(command, parentNode.address[0])

    return `client: ${client.name}, was succesfully activated`
}

const activateClientsService = async (ids: [string]) => {
    const responseMessage = <any>[]
    const commands = <any>[]
    const parentNodes = <any>[]

    ids.forEach(async (_id:string) => {
        const client = await clientModel.findById(_id)
        if(!client) return new Error('id not found')
        const parentNode = await nodeModel.findById(client.parentNode)
        if (!parentNode) return new Error('node not found')

        if (client?.pppoeName) {
            commands.push(`ppp secret set ${client.pppoeName} disabled=no`)
        }
        else {
            commands.push(`ip firewall address-list set disabled=yes address=${client.ip} list=cortes numbers=0`)
        }        
        parentNodes.push(parentNode.address[0])
        responseMessage.push(`client: ${client.name}, was succesfully activated`)
    })

    await execSSHBulk(commands, parentNodes)

    return responseMessage

}

const cutClientService = async (_id: string) => {
    
}

const cutClientsService = async (ids: [string]) => {
    
}

export {
    activateClientService,
    activateClientsService,
    cutClientService,
    cutClientsService
}