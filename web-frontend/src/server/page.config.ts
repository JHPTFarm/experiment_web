import express from 'express'
const router = express.Router()

router.get('*', (req: any, res: any): any => {
  res.render('index', {})
})

export default router
