import {RowDataPacket} from "mysql2";

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