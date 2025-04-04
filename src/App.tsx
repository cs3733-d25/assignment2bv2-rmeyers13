import Title from './components/Title';
import Intro from './components/Intro';
import Basketball from './components/Basketball';
import './App.css'

function App() {

  return (
      <div>
          <Title team="CS3733-D25 Team 53" hobbies={["Basketball", "JOE DO WORK YOU LAZYPANTS"]} />
          <Intro name="Riley Meyers" nameagain="JOE DO WORK" />
          <Basketball />
      </div>
  );
}

export default App
