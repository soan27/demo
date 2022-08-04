import logo from "./logo.svg";
import "./App.css";
import Post from "./Component/useContext/Post";
import CountDown from "./Component/useRef/CountDown";
import CountDownRd from "./Component/useReducer/CountDownRd";
import TodoList from "./Component/useReducer/TodoList";
import Counter from "./Component/useCallback/Counter";

function App() {
  return (
    <div className="App">
      <Post />
      <CountDown />
      <CountDownRd />
      <TodoList />
      <Counter />
    </div>
  );
}

export default App;
