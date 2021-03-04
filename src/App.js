import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Resume from './pages/Resume'
import Patch from './pages/Patch'
import Slideshow from './components/Slideshow'
import Footer from './components/Footer'
import dedster from './images/dedster.png'
import fashion from './images/fashion.png'
import giggle from './images/giggle.png'
import wayfarer from './images/wayfarer.png'
import makeasip from './images/makeasip.png'
import spades from './images/spades.png'

function App() {
  return (<div>
    <Home/>
    <Navbar/>
    <About/>
    <Project/>
    <Slideshow
    interval={5000}
    images={[
      dedster,
      fashion,
      giggle,
      wayfarer,
      makeasip,
      spades
    ]}/>
    <Resume/>
    <Patch/>
    <Contact/>
    <Footer/>
</div>
  );
}

export default App;
