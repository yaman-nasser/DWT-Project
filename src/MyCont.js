import { useState } from "react";
import { Button } from "react-bootstrap";

export default function MyCont() {
  const [catCount, setCatCount] = useState(0);
  const [dogCount, setDogCount] = useState(0);
  const [names, setNames] = useState([
    { id: 1, name: "John", lastName: "ali", age: "20" },
    { id: 2, name: "Mary", lastName: "mo", age: "21" },
    { id: 3, name: "yaman", lastName: "ali", age: "20" },
    { id: 4, name: "omar", lastName: "ali", age: "25" },
    { id: 5, name: "ali", lastName: "ali", age: "22" },
  ]);

  const y = names.map((x) => <li key={names.id}>{x.name + "   " + x.age}</li>);

  return (
    <>
      <ul>
        {names.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {/* <h1>{y}</h1> */}
      <div
        style={{
          border: "solid 10px gray",
          width: "50%",
          height: "400px",
          margin: "10px",
        }}
      >
        <h1 style={{ backgroundColor: "blue" }}>CAT</h1>
        <h1 style={{ marginTop: "20%" }}>count : {catCount}</h1>
        <Button variant="secondary" onClick={() => setCatCount(catCount + 1)}>
          Click
        </Button>{" "}
        <Button variant="secondary" onClick={() => setCatCount(catCount - 1)}>
          discount
        </Button>
      </div>
      <div
        style={{
          border: "solid 10px gray",
          width: "50%",
          height: "400px",
          margin: "10px",
        }}
      >
        <h1 style={{ backgroundColor: "red" }}>DOG</h1>
        <h1 style={{ marginTop: "20%" }}>count : {dogCount}</h1>
        <Button variant="secondary" onClick={() => setDogCount(dogCount + 1)}>
          Click
        </Button>{" "}
        <Button variant="secondary" onClick={() => setDogCount(dogCount - 1)}>
          discount
        </Button>
      </div>
    </>
  );
}
