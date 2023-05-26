import { useEffect, useState } from "react";
import "./App.css";
import Button from "./component/Button";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [response, setResponse] = useState("");

  async function bar() {
    await fetch(
      "https://express-testing.netlify.app/.netlify/functions/api/demo"
    ).then((res) => {
      res.json().then((r) => {
        setResponse(r.response);
      });
    });
  }

  useEffect(() => {
    bar();
  }, [response]);

  return (
    <div className="card">
      <Button
        add={true}
        name="Add in Counter"
        counter={counter}
        setCounter={setCounter}
      />
      <Button
        add={false}
        name="Reduce in Counter"
        counter={counter}
        setCounter={setCounter}
      />
      <p>{counter}</p>
      <p>Response: {response}</p>
    </div>
  );
}
