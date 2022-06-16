import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarApp from './components/navbar/NavBar.js';
import './components/navbar/NavBarStyle.css';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div className='app'>
      <NavBarApp/>
      <ItemListContainer/>
    </div>

  );
}

export default App;
