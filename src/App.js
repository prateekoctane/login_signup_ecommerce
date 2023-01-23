import './App.css';
import { Navbar } from './Components/Navbar';
import { MainRoutes } from './pages/MainRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
