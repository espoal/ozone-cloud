import { buildHelper } from "@libs/build"


buildHelper({
    name: 'pong',
    entryPoints: ['svcs/pong/src/index.mts'],
    outDir: 'pong',
    external: [],
})

buildHelper({
    name: 'echo',
    entryPoints: ['svcs/echo/src/index.mts'],
    outDir: 'pong',
    external: [],
})
