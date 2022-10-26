import express, { Express } from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import Routes from './startup/Routes'
import Database from './startup/Database'

dotenv.config()

const App: Express = express()
const Port = process.env.PORT

Database().catch((err) => {
    console.log(`⚡️ [server]: Connection to database unsuccessful!`)
    console.log(`⚡️ [server]: Error message: ${err}`)
})

Routes(App)

App.use(morgan('dev'))

App.listen(Port, () => {
    console.log(`⚡️[server]: Server is running at port ${Port}!`)
})