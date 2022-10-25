import express, { Express } from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import Routes from './startup/routes'

dotenv.config()

const App: Express = express()
const Port = process.env.PORT

Routes(App)

App.use(morgan('dev'))
App.listen(Port, () => {
    console.log(`⚡️[server]: Server is running at port ${Port}!`)
})