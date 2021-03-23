
import Counter from "./Counter";

export default function App() {
  return (
    <div>
      <div>
        Button was clicked{" "}
        <Counter
          value={5}
          min={-10}
          max={10}
          onChange={(value) => {
            console.log("новое значение:", value);
          }}
        />
      </div>
    </div>
  );
}
