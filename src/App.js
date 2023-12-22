import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './pages/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/add' element={<Add></Add>}></Route>
          <Route path='/home' element={<LandingPage></LandingPage>}></Route>
          <Route path='' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
