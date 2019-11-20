import cors from 'cors'
import express from 'express'
import fs from 'fs'
import path from 'path'
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import pageController from './page.config'

const app = express()
const publicPath = './public'

app.set('views', publicPath)
app.set('view engine', 'pug')

app.use(express.static(publicPath))
app.use('/', pageController)

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
