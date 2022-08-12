import './App.css';
import Form from "./components/CreateSchool/CreateSchool";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import "./fontello/css/fontello.css"

function App() {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default App;
