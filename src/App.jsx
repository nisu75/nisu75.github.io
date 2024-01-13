import './App.css';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';

export default function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}