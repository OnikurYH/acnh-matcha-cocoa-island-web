export function debounce(func: Function, wait: number, immediate = false) {
    let timeout: number | undefined;
    return function(this: unknown, ...args: unknown[]) {
        const later = () => {
            timeout = undefined;
            if (!immediate) func.apply(this, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(this, args);
    };
}

export function throttle(callback: Function, delay: number) {
    let throttleTimeout: number | null = null;
    let storedEvent: unknown | null = null;

    const throttledEventHandler = (event: unknown) => {
        storedEvent = event;
        const shouldHandleEvent = !throttleTimeout;
        if (shouldHandleEvent) {
            callback(storedEvent);
            storedEvent = null;
            throttleTimeout = setTimeout(() => {
                throttleTimeout = null;
                if (storedEvent) {
                    throttledEventHandler(storedEvent);
                }
            }, delay);
        }
    };

    return throttledEventHandler;
}
