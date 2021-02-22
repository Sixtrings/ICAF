import './App.scss';
import Home from './components/home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router } from "react-router-dom";

library.add(faLinkedin);

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
