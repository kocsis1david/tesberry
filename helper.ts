
export function errorToConsole<E, T extends any[]>(cb?: (...args: T) => void): ((error: E, ...args: T) => void) {
    return (error: E, ...args: T) => {
        if (error) {
            console.error(error);
        } else {
            if (cb) cb(...args);
        }
    };
}
