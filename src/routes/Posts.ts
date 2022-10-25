import express from 'express'
import * as Controllers from '../controllers/PostsControllers'

const Router = express.Router()

Router.get('/', Controllers.Get)

export default Router