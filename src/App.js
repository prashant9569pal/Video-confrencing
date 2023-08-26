import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/Home';
import RoomPage from './Pages/Home/room';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<h1><HomePage/></h1>}/>
      <Route path='/room/:roomId' element={<RoomPage/>}>
      
      </Route>
      </Routes>
    </div>
  );
}

export default App;
