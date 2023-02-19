import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';


function App() {
  
  return (
    <div className="App">
      
      <Pessoa name="João" idade = "18" profile="nao tem" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjDYxcSbq545lLhRqgGJJhBwhEKtG_CDhl1Leea1eqAyiD7m-4cauy-QGx-mB3GcCPJs&usqp=CAU/150" />
      <SayMyName name="joao" senha="0105"/>
      <Frase />
      <List />
      
    </div>
  );
}

export default App;
