let firstName: string = "Jack";
let lastName:string = "Ghotte";
let hasLoggedIn: boolean = true;

let username = firstName += lastName;

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = username.split(" ");
const myValues: Array<number> = [1, 2, 3];

interface Person {
    first: string;
    last: string;
}

const myPerson: Person = {
    first: "Jack",
    last: "Ghotte",
}

const ids: Record<number, string> = {
    10: "a",
    20: "b",
}

ids[30] = "c";

if (ids[30] === "d"){

} 