import moongose from 'mongoose'

export default async () => {
    const db = await moongose.connect(process.env.DB_URL as string)
    console.log(`⚡️[server]: Connection to database ${db.connection.db.databaseName} successful!`)
}