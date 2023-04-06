import './cssFiles/app.css';
import Footer from './modules/footer/Footer';
import Menu from './modules/menu/Menu';
import AddNote from './modules/notes/AddNote';
import Notes from './modules/notes/Notes';

function App() {
  return (
    <div className='app-container'>
      <Menu/>
      <AddNote/>
      <Notes/>
      <Footer/>
    </div>
  );
}

export default App;
