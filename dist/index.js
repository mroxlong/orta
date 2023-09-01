"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = __importStar(require("mysql2"));
class Floopi {
    constructor(connectionConfig) {
        this.connectionConfig = connectionConfig;
        this.connection = mysql.createPool(connectionConfig);
    }
    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                    connection.release();
                }
                if (args) {
                    connection.query(sql, args, (err, results) => {
                        if (err) {
                            reject(err);
                            connection.release();
                        }
                        resolve(results);
                        connection.release();
                    });
                }
                else {
                    connection.query(sql, (err, results) => {
                        if (err) {
                            reject(err);
                            connection.release();
                        }
                        resolve(results);
                        connection.release();
                    });
                }
            });
        });
    }
}
module.exports = { Floopi };
