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

let a:ReadonlyPerson = {
    name: 'a',
    age: 12
}

let a2: Person = {
    name: 'hung',
    age: 12
}
a2.name = '2222';

let b: Optional<Person> = {
  
