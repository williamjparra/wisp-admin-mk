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

async function connect(host: string, ssh: any) {
    await ssh.connect({
        host,
        username,
        password
    })
}

const callSSHBulk = async (commands: [string], node: [string]) => {
    const ssh = new NodeSSH()
    var current = <any | string>null

    commands.forEach(async (command, i) => {
        
        if(!current) {
            connect(node[i], ssh)
        }

        if( current !== node[i]) {
            ssh.dispose()
            connect(node[i], ssh)
        }

        const response = await ssh.execCommand(command)
        console.log(response.stdout)
    
    })

    if(ssh.isConnected()) ssh.dispose()        
    
}

const execSSH = async (command:string, node: string) => {
    await callSSH(command, node)
}

const execSSHBulk = async (commands:[any], node: [any]) => {
    await callSSHBulk(commands, node)
}

export { execSSH, execSSHBulk }