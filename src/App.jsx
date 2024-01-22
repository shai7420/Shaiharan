import './App.scss';
import Achievements from './Components/Achievements/Achievements';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import Parallax from './Components/Parallax/Parallax';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
function App() {
  return (
    <div>
      <section id='Homepage'><Navbar/><Homepage/></section>
      <section><Parallax/></section>
      <section id='Skills'><Skills/></section>
      <Projects/>
      <section id='Achievements'><Achievements/></section>
      <section id='Education'><Education/></section>
      <section id='Contact'><Contact/></section>
    </div>
  );
}

export default App;
