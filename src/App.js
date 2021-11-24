import './App.css';
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
        <Header/>
        <Nav className="nav" />
        <Main className="main" />
        <Footer className="footer" />
    </div>
  );
}

export default App;
