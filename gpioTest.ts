import { Blinker } from './blinker';
import { pollTes } from './tesChecker';
import { errorToConsole } from './helper';
import { loadOptions } from './tesOptions';

loadOptions(errorToConsole(options => {
    const blinker = new Blinker(4);
    
    setInterval(() => {
        pollTes(options, filled => {
            console.log("TES filled: " + filled);
            blinker.set(!filled);
        });
    }, 10000);
}))

