import { NodeSSH } from 'node-ssh'
import 'dotenv/config'

const username = process.env.USERNAME
const password = process.env.PASSWORD

const callSSH = async (command: string, node: string) => {
    const ssh = new NodeSSH()

    await ssh.connect({
        host: node,
        username,
        password
    })
    const response = await ssh.execCommand(command)
    console.log(response.stdout)
    
    ssh.dispose()        
    
}

const callSSHBulk = async (commands: [string], node: string) => {
    const ssh = new NodeSSH()

    await ssh.connect({
        host: node,
        username,
        password
    })

    commands.forEach(async (command) => {

        const response = await ssh.execCommand(command)
        console.log(response.stdout)
    
    })

    ssh.dispose()        
    
}

const execSSH = async (command:string, node: string) => {
    await callSSH(command, node)
}

const execSSHBulk = async (commands:[string], node: string) => {
    await callSSHBulk(commands, node)
}

export { execSSH, execSSHBulk }