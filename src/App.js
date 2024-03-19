import './App.css';
import { Link, Outlet } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Chris' React Website</h1>
      <nav>
        <Link to="/">Home</Link><br />
        <Link to="/about">About Us</Link><br />
        <Link to="/contact">Contact Us</Link>        
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>About Us</h1>
      <nav>
        <Link to="/">Home</Link><br />
        <Link to="/about">About Us</Link><br />
        <Link to="/contact">Contact Us</Link>        
      </nav>
      <Outlet />
    </div>
  );
}

export function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <nav>
        <Link to="/">Home</Link><br />
        <Link to="/about">About Us</Link><br />
        <Link to="/contact">Contact Us</Link>        
      </nav>
    </div>
  );
}

export function App() {
  return <Home />;
}