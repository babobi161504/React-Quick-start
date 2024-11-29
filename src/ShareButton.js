import { useState } from 'react';

export default function ShareButton() {
 
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);  
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />
    </div>
  );
}

function Button({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
