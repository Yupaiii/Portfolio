import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import './index.css';

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;