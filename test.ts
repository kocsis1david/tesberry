import { pollTes } from "./tesChecker";
import { loadOptions } from './tesOptions';
import { errorToConsole } from './helper';


loadOptions(errorToConsole(options => {
  pollTes(options, x => console.log(x));
}));
