import './style/App.css';
import ClassCounter from './components/class/classCounter';
import HookCounter from './components/hook/hookCounter';

function App() {
  return (
    <div className="App">
      <HookCounter />
      <ClassCounter />
    </div>
  );
}

export default App;
