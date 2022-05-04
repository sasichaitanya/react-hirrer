import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// context reference
import { Provider } from './components/ContextDemo';

// components
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import DestructureFunctional from './components/DestructureFunctional';
import DestructureClass from './components/DestructureClass';
import ParentEvent from './components/ParentEvent';
import ConditionalRendering from './components/ConditionalRendering';
import ClassRefsChild from './components/ClassRefsChild';
import ClassRefsParent from './components/ClassRefsParent';
import ListRendering from './components/ListRendering';
import StyleComponent from './components/StyleComponent';
import LifeCycleParent from './components/LifeCycleParent';
import MemoPureParent from './components/MemoPureParent';
import HeroComponent from './components/HeroComponent';
import ErrorBoundaryDemo from './components/ErrorBoundaryDemo';
import PropsChildrenExample from './components/PropsChildrenExample';
import HocDemoParent from './components/HocDemoParent';
import FormHandling from './components/FormHandling';
import ContextApiDemoA from './components/ContextApiDemoA';
import HttpgetDemo from './components/HttpgetDemo';
import HttppostDemo from './components/HttppostDemo';
// hooks
import UseStateDemo from './components/hooks/UseStateDemo';
import UseEffectDemo from './components/hooks/UseEffectDemo';
import UseRefDemo from './components/hooks/UseRefDemo';
import UseStateDemoForm from './components/hooks/UseStateDemoForm';

function App() {
  return (

    <div>
      <h1>React</h1>
      {/* <FunctionalComponent name="I am functional component"/> */}
      {/* <ClassComponent name="chaitanya" locations=""/> */}
      {/* <DestructureFunctional one ="one" two="two"/> */}
      {/* <DestructureClass one ="one" two="two"/> */}
      {/* <ParentEvent/> */}
      {/* <ConditionalRendering /> */}
      {/* <ClassRefsParent /> */}
      {/* {<ListRendering />} */}
      {/* {<StyleComponent />} */}
      {/* {<LifeCycleParent />} */}
      {/* {<MemoPureParent />} */}

      {/*it is accessed as props.children in child component */}
      {/* <PropsChildrenExample>
        <p>helloooooooo</p>
        <p>Hi</p>
        <p>how</p>
        <p>are</p>
        <p>you</p>
      </PropsChildrenExample> */}

      {/* <ErrorBoundaryDemo>
        <HeroComponent name="hero" />
      </ErrorBoundaryDemo>
      <ErrorBoundaryDemo>
        <HeroComponent name="joker" />
      </ErrorBoundaryDemo> */}
      {/* <HocDemoParent /> */}
      {/* <FormHandling /> */}
      {/* <Provider value="{'a': 1, 'b': 2}">
        <ContextApiDemoA  name ="hello"/>
      </Provider> */}
      {/* <HttpgetDemo /> */}
      {/* <HttppostDemo/> */}
      {/* <UseStateDemo /> */}
      {/* <UseEffectDemo /> */}
      {/* <UseRefDemo /> */}
      <UseStateDemoForm/>
    </div>

  );
}


export default App;
