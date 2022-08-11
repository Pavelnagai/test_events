import './App.css';
import Form from "./components/CreateSchool/CreateSchool";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
    return (
        <div className="App">
            <Header/>
            <Body/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default App;
