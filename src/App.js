import { useEffect } from 'react';
import './App.css';
import Project from './Container/Project';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="App">
      <Project />
    </div>
  );
}

export default App;
