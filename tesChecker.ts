import { TesOptions } from './tesOptions';

const ntlm = require('request-simple-ntlm');


export function pollTes(options: TesOptions, callback: (filled: boolean)=> void  ) {
    // console.log("response");

    // console.log("response");
    ntlm.fetch(options, (err: any, res: any, body: string) => {
        // console.log("response");
        // console.log(body);
        var missingClassName = 'class="missing'; 
       // var re = /class="missing"/gi;

        if (body.includes(missingClassName)) {
            
            // console.log("false");
            callback(false);
        } else {
            // console.log("true");
            callback(true);
        }

    });

    
}