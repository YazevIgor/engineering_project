import './App.css';
import Main from "./components/Main/Main";

function App(props) {
  return (
    <div className="App">
        <Main className="main" boltsState={props.boltsState}/>
    </div>
  );
}

export default App;
