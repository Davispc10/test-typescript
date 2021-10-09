import { Router, Request, Response } from 'express'

const routes = Router()

routes.get('/teste', (req: Request, res: Response) => {
  console.log('ooooooooooooooooooooooooioioi')
  return res.json('Olaaaaaaaaaaaaaaaa')
})

export default routes
