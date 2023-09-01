import {ConnectionConfigObject, Results} from "./types";
import {PoolConnection} from "mysql2/typings/mysql/lib/PoolConnection";
import * as mysql from 'mysql2'
import {Pool} from "mysql2/typings/mysql/lib/Pool";
import {QueryError, RowDataPacket} from "mysql2";
import ErrnoException = NodeJS.ErrnoException;
export class Floopi{


    private connection: Pool;
    constructor(private readonly connectionConfig:ConnectionConfigObject) {
        this.connection = mysql.createPool(connectionConfig);
    }

    public query(
        sql: string,
        args?: string[] | undefined,
    ): Promise<Results[]> {
        return new Promise((resolve, reject) => {
            this.connection.getConnection(
                (err: ErrnoException|null , connection: PoolConnection) => {
                    if (err) {
                        reject(err);
                        connection.release();
                    }
                    if (args) {
                        connection.query(
                            sql,
                            args,
                            (err: QueryError | null, results: Results[]) => {
                                if (err) {
                                    reject(err);
                                    connection.release();
                                }
                                resolve(results);
                                connection.release();
                            },
                        );
                    } else {
                        connection.query(
                            sql,
                            (err: QueryError | null, results: Results[]) => {
                                if (err) {
                                    reject(err);
                                    connection.release();
                                }
                                resolve(results);
                                connection.release();
                            },
                        );
                    }
                },
            );
        });
    }
}

module.exports = Floopi