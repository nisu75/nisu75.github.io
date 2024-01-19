import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Fun from './pages/Fun.jsx';
import Projects from './pages/Projects.jsx';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/fun" element={<Fun />} />*/}
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}