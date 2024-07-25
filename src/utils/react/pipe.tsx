function pipe<U>(...fns: Function[]) {
    return <E,>(initialvalue: any): U =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialvalue);
}