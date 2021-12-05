export const idGenerator = () => {
    return Math.random().toString(36).substr(2, 9);
};

export const selfClearTimeout = (cb , timeout) => {
    let timer = setTimeout(() => {
        cb();
        clearTimeout(timer);
    } , timeout)
}