import './App.scss';
import Home from './components/home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin);

function App() {
  return (
    <Home />
  );
}

export default App;
