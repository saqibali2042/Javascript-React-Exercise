import './App.css';
import Counter from './Hooks/UseState/Counter';
import NameList from './Hooks/UseState/NameList';
import NameListReducer from './Hooks/UseReducer/NameListReducer';
import ListData from './Hooks/UseEffect/ListData';

function App() {
  return (
    <div className="App">
      <Counter />
      <NameList />
      <NameListReducer />
      <ListData />
    </div>
  );
}

export default App;
