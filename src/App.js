import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Resume from './pages/Resume'
import Patch from './pages/Patch'
import Footer from './components/Footer'

function App() {
  return (<div>
    <Home/>
    <Navbar/>
    <About/>
    <Project/>
    <Resume/>
    <Patch/>
    <Contact/>
    <Footer/>
</div>
  );
}

export default App;
