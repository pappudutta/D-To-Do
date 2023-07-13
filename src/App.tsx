import { useState } from "react";
import "./App.css";

let name: string;
let age: number;
let func: () => void;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string]; //touple
let anyValue: unknown; //recomended any type of value

interface Guy extends Person {
  name: string;
  age: number;
}

// Define Objects
interface Person {
  name: string;
  age?: number | string; //make it optional using ? symbol and use union to define both number and string
  isTrue: boolean;
}

let person: Person = {
  name: "pappu",
  age: 30 + " " + "twenty two",
  isTrue: true,
};

function App() {
  return (
    <>
      <p>{person.name + " " + person.age}</p>
      <h1>typescript</h1>
    </>
  );
}

export default App;
