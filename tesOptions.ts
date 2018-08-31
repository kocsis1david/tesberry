import * as fs from "fs";

export interface TesOptions {
    username: string,
    password: string,
    workstation: '',
    domain: '',
    url: string,
}


export function loadOptions(cb: (err: Error, options: TesOptions) => void) {
    fs.readFile("options.json", { encoding: "utf-8" }, (err, data) => {
        // TODO: why err is not nullable in @types/node?
        cb(err, data ? JSON.parse(data) : {});
    });
    
}