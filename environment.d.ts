import { StringSchemaDefinition } from "mongoose"

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT?: string
            DB_URL?: string
        }
    }
}

export {}