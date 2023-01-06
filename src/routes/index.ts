import { Router } from "express";
import { readdirSync } from 'fs'


const PATH_ROUTER = `${__dirname}`
const router = Router()

const routeName = (filename: string) => {
    const file = filename.split('.').shift()
    return file
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    const name = routeName(fileName)
    if (name !== 'index') {
        console.log(`loading route ......... /${name}`)
        import(`./${name}`).then((moduleRouter) => {
            router.use(`/${name}`, moduleRouter.router)
        })
    } 
})

export { router }