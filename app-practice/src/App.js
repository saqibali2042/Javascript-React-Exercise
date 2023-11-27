import './App.css';
import Counter from './Hooks/UseState/Counter';
import NameList from './Hooks/UseState/NameList';
import NameListReducer from './Hooks/UseReducer/NameListReducer';
import ListData from './Hooks/UseEffect/ListData';
import InputFocus from './Hooks/UseRef/InputFocus';
import RegisterForm from './FormData/RegisterForm';

function App() {
  return (
    <div className="App">
      <Counter />
      <NameList />
      <NameListReducer />
      <ListData />
      <InputFocus />
      <RegisterForm />
    </div>
  );
}

export default App;
