import './App.scss';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="app">
        {/* // ** Header Component */}  
        <Header />
        {/* Body Component */}
        <Home />
    </div>
  );
}

export default App;
