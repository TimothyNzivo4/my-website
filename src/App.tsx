import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Header, Footer } from './components';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Resume from './pages/Resume';
import Testimonials from './pages/Testimonials';
import Grain from './components/Grain';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Grain />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
