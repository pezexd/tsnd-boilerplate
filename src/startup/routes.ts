import express, { Express } from 'express'
import Posts from '../routes/PostsRoutes'

export default (App: Express) => {
    App.use(express.json())

    App.use('/api/posts', Posts)
}