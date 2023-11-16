import './App.css';
import soriaLogo from './images/soria-logo.png';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="homework-App">
      <div className='logo-container'>
        <img src={soriaLogo}
          className='soria-logo'
          alt='Logo de Soria'/>
      </div>
      <div className='main-list'>
        <h1 className='list-title'> Assignments </h1>
        <ToDoList></ToDoList>
      </div>
    
    </div>
  );
}

export default App;
