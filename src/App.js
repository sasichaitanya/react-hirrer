import './App.css';
// components
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <FunctionalComponent name="I am functional component"/>
      {/* <ClassComponent/> */}
    </div>
  );
}


export default App;
