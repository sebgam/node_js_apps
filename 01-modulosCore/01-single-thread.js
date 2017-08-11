'use strict'

function singleThread(){

process.argv[2] = 'Hola putos'

console.log('------------------------------------------------')
console.log('         EL PROCESO DE NODE.JS        ')
console.log('Id del proceso..............' + process.pid)
console.log('titulo......................' + process.title)
console.log('Directorio de node..........' + process.execPath)
console.log('Directorio actual...........' + process.cwd())
console.log('Version de node.............' + process.version)
console.log('Version de dependencias.....' + process.versions)
console.log('Plataforma (S.O)............' + process.platform)
console.log('arquitectura(S.O)...........' + process.arch)
console.log('Tiempo activo de node.......' + process.uptime())
console.log('Argumentos del producto.....' + process.argv)
console.log('------------------------------------------------')

console.log( process.argv[0],process.argv[1],process.argv[2])

}

singleThread();