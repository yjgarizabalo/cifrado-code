import { UseState } from './UseState.js'
import { UseReducer } from './UseReducer.js'
// import { UseContador } from './UseContador.js';
import './App.css';

function App() {
  return (
    <div className="containerApp">
      <UseState name='⚛️ useState' />
      <UseReducer name='🚀 useReducer' />
      {/* <UseContador name='Contador' /> */}
    </div>
  );
}

export default App;