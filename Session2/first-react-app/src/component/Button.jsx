export default function Button({ name, counter, setCounter, add }) {
  function handleClick() {
    if (add) {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  }

  return <button onClick={handleClick}>{name}</button>;
}
