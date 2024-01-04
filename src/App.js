import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginComponent from './LoginComponent';
import SignUpComponent from './SignUpComponent';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUpComponent />} />
      <Route path='/login' element={<LoginComponent />} />
    </Routes>
  );
}

export default App;
