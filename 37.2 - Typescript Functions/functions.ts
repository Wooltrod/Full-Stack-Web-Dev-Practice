function addNumbers(a:number, b:number): number {
    return a + b;
}

const addStrings = (str1: string, str2: string = ""): string => `${str1} ${str2}`;

export default addNumbers;
export { addStrings };