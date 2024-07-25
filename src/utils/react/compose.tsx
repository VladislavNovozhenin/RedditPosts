function compose<U>(...fns: Function[]) {
    return <E,>(initialvalue: any): U =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialvalue);
}