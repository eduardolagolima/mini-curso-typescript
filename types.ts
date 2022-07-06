// boolean (true, false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 20.33;

// array (type[])
let items: string[];
items = ["foo", "bar"];

let values: Array<number>;
values = [1, 2, 3];

// tuple
let title: [number, string, string];
title = [1, "foo", "bar"];

// enum
enum Color {
  white = "#fff",
  black = "#000",
}

// any
let anything: any;
anything = true;
anything = 123;
anything = "123";
anything = [1, 2, 3];

// void
const logger = () => console.log("foo");

// null | undefined
type Foo = string | undefined | null;

// never
const error = (): never => {
  throw new Error("error");
};

// object
let cart: object;
cart = {
  key: 123,
};

// type inference
let text = "text";
