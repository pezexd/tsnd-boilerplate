import express from 'express'
import * as Controllers from '../controllers/PostsControllers'

const Router = express.Router()

Router.get('/', Controllers.Get)
Router.post('/', Controllers.Post)
Router.put('/:id', Controllers.Put)
Router.delete('/:id', Controllers.Delete)

export default Router