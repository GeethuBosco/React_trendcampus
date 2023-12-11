import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';

const slides = [
  "./image/coffee.png",
  "./image/lion1.jpg",
  "./image/lotus.jpg",
]
function App() {
  return (
    <div className="App">
      <Section1>
        {slides.map((s) =>(
          <img src={s} alt='not found'/>
        ))}
      </Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
    </div>
  );
}

export default App;
