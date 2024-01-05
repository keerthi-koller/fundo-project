import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginComponent from './LoginComponent';
import SignUpComponent from './SignUpComponent';

function App() {
  return (
    // <div className='bg-black'>
    //   <h1 className='text-7xl text-center text-blue-400'>hello wolrd</h1>
    // </div>
    <Routes>
      <Route path='/' element={<SignUpComponent />} />
      <Route path='/login' element={<LoginComponent />} />
    </Routes>
  );
}

export default App;
