```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic to update count based on previous state
    // Removed initial state update to avoid unexpected behavior
    // setCount(prevCount => prevCount + 1); 
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    </div>
  );
}
```