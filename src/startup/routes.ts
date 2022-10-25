import express, { Express, Request, Response } from 'express'
import Posts from '../routes/Posts'

export default (App: Express) => {
    App.use(express.json())

    App.use('/api/posts', Posts)
    App.get('/', (_req: Request, res: Response) => {
        res.send('Express + Typescript Server')
    })
}