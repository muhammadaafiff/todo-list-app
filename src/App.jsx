import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <h1 className="text-white">
        What's the plan <span className="text-orange-400">for today?</span>
      </h1>
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;
