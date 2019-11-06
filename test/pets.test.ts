import { Server } from 'hapi'
import { createApp } from '../src/server'

describe('Pets api', function () {

  let server: Server

  beforeEach(async () => {
    server = await createApp({ testing: true })
    await server.initialize()
  })

  test('can create a pet', async () => {
    const response = await server.inject({
      method: 'POST',
      url: '/api/pets',
      payload: {
        name: 'Charlie'
      }
    })

    expect(response.result).toMatchObject({ id: expect.any(Number), name: 'Charlie' })
  })

  test('can get a pet', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/api/pets'
    })

    expect(response.result).toMatchObject({ id: expect.any(Number), name: 'charlie' })
  })
})