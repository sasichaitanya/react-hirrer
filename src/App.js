import './App.css';
// components
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import DestructureFunctional from './components/DestructureFunctional';
import DestructureClass from './components/DestructureClass';
import ParentEvent from './components/ParentEvent';
import ConditionalRendering from './components/ConditionalRendering';
import ClassRefsChild from './components/ClassRefsChild';
import ClassRefsParent from './components/ClassRefsParent';

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      {/* <FunctionalComponent name="I am functional component"/> */}
      {/* <ClassComponent name="chaitanya" locations=""/> */}
      {/* <DestructureFunctional one ="one" two="two"/> */}
      {/* <DestructureClass one ="one" two="two"/> */}
      {/* <ParentEvent/> */}
      {/* <ConditionalRendering /> */}
      <ClassRefsParent />
    </div>
  );
}


export default App;
