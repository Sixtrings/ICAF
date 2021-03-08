import './App.scss';
import Home from './components/home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';




import { BrowserRouter as Router } from "react-router-dom";

library.add(faLinkedin, faFacebook, faTwitter, faWhatsapp, faShareSquare, faCopy);

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
