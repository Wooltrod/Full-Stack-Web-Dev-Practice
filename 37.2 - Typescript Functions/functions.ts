function addNumbers(a:number, b:number): number {
    return a + b;
}

const addStrings = (str1: string, str2: string = ""): string => `${str1} ${str2}`;

//function with Union Typing (A parameter can be one of two types)
const format = (title: string, param2: string | number): string => `${title} ${param2}`;

//Function with void return type (writes to console)
const printFormat = (title: string, param2: string | number): void => {
    console.log(format(title, param2));
};

export default addNumbers;
export { addStrings };