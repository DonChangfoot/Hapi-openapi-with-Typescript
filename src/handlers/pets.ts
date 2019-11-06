import { Request, ResponseToolkit } from 'hapi'
import { NewPet } from 'types/new-pet'

export async function post (request: Request, h: ResponseToolkit): Promise<any> {
  const body = request.payload as NewPet
  return {
    id: 1,
    name: body.name
  }
}

export async function get (request: Request, h: ResponseToolkit): Promise<any> {
  return {
    id: 1,
    name: 'charlie'
  }
}
