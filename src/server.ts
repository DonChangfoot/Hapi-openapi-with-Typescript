import Path from 'path'
import { Server } from 'hapi'

export type ServerConfig = {
  port?: number | string;
  host?: string;
  testing?: boolean;
}

export async function createApp ({
  port,
  host,
  testing = false
}: ServerConfig): Promise<Server> {
  const server = new Server({ port, host })

  const swaggerPath = testing
    ? '../dist/interface/pets.json'
    : './interface/pets.json'
  const handlerPath = testing ? '../dist/handlers' : '../dist/handlers'
  await server.register({
    plugin: require('hapi-openapi'),
    options: {
      api: Path.join(__dirname, swaggerPath),
      handlers: Path.join(__dirname, handlerPath)
    }
  })

  await server.initialize()

  return server
}
