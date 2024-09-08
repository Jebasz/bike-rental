import Header from "./Components/HomePage/Header";
import "./App.css";
import { BrowserRouter as Router} from 'react-router-dom';
import Footer from "./Components/HomePage/Footer";

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Footer />
      </Router>
      
    </div>
  );
}

export default App;
