import { createApp } from './server'

async function run () {
  const server = await createApp({ port: 3000 })
  server.start()

  console.log('server started', server.info.port)
  console.log(server.table())
}

run()
