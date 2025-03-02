import {Routes,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Register from './Pages/Register';
import LogIn from './Pages/LogIn';

function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element={<Homepage/>}/>
      <Route path ="/Register" element={<Register/>}/>
      <Route path ="/LogIn" element={<LogIn/>}/>
    </Routes>
    </>
  );
}

export default App;
