interface Person {
    name: string;
    age: number;
}

type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
}

type Optional<T> = {
    [P in keyof T]?: T[P]; 
}

type ReadonlyPerson = ReadOnly<Person>;
type OptionalPerson = Optional<Person>;

const rPerson: ReadonlyPerson = {
    name: 'a',
    age: 12
}

const oPerson: Optional<Person> = {
    name: 'Han',
}

console.log(oPerson)
