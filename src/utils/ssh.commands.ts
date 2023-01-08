const removePPPOE = (name: string) => {
    return `interface pppoe-server remove <pppoe-${name}>`
}

const disablePPPoe = (name: string) => {
    return `ppp secret set ${name} disabled=yes`
}

const enablePPPoe = (name: string) => {
    return `ppp secret set ${name} disabled=no`
}

const disableIPCut = (name: string) => {
    return `ip firewall address-list set disabled=no address=${name} list=cortes numbers=0`
}

const enableIPCut = (name: string) => {
    return `ip firewall address-list set disabled=yes address=${name} list=cortes numbers=0`
}

export {
    removePPPOE,
    disablePPPoe,
    enablePPPoe,
    enableIPCut,
    disableIPCut
}