import {RowDataPacket} from "mysql2";


declare module 'floopi'
export type ConnectionConfigObject =  {

    connectionLimit?: number,
    timezone?: string,
    waitForConnections?: boolean,
    host: string,
    database: string,
    user: string,
    password: string,
    port: number,
    connectTimeout?: number,
    debug?: boolean
}

export interface Results extends RowDataPacket{}
