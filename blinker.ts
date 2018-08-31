import { Gpio } from "onoff";
import { errorToConsole } from './helper';

export class Blinker {
    led: Gpio;
    interval: NodeJS.Timer | null;
    
    constructor(gpio: number) {
        this.led = new Gpio(gpio, "out");
        this.interval = null;
    }

    set(value: boolean) {
        if (value) this.start();
        else this.stop();
    }

    start() {
        this.stop();

        this.interval = setInterval(() => {
            this.led.read(errorToConsole(value => {
                this.led.write(1 - value, errorToConsole());
            }));
        }, 500);
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }

        this.led.write(0, errorToConsole());
    }

    destroy() {
        this.stop();
        this.led.unexport();
    }
}