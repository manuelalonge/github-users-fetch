document.addEventListener('DOMContentLoaded', () => {
    function useCallback(callback) {
        callback(1);
        callback(2);
        callback(3);
    }

    function callback(sentence) {
        // TODO: print out sentence
        console.log(sentence);
        setTimeout(() => {
            console.log('settimeout');
        }, 2000);
    }

    // TODO: execute useCallback with the callback as the argument
    useCallback(callback);
});