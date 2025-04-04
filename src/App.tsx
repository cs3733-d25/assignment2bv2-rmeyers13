import Title from './components/Title';
import Intro from './components/Intro';
import Basketball from './components/Basketball';
import Climbing from './components/Climbing.tsx';
import './App.css'

function App() {

  return (
      <div>
          <Title team="CS3733-D25 Team 53" hobbies={["Basketball", "Climbing"]} />
          <Intro name="Riley Meyers" nameagain="Joseph Abata" />
          <Basketball />
          <br/>
          <Climbing />
      </div>
  );
}

export default App
