import { Server } from 'hapi'
import swagger from './interface/pets.json'
import * as PetsController from './handlers/pets'

export type ServerConfig = {
  port?: number | string;
  host?: string;
}

export async function createApp (config?: ServerConfig): Promise<Server> {
  const server = new Server(config)

  await server.register({
    plugin: require('hapi-openapi'),
    options: {
      api: swagger,
      handlers: {
        pets: {
          get: PetsController.get,
          post: PetsController.post
        }
      }
    }
  })

  return server
}
