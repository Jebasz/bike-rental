import Header from "./Components/HomePage/Header";
import "./App.css";
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Header />
      </Router>
      
    </div>
  );
}

export default App;
