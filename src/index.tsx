import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignUpComponent from './components/SignUpComponent';
import HomeComponent from './components/HomeComponent';
import ErrorComponent from './components/ErrorComponent';
import NoteCardComponent from './components/NoteCardComponent';
import TakeNoteComponent from './components/TakeNoteComponent';
import HeaderComponent from './components/HeaderComponent';
import SideBarComponent from './components/SideBarComponent';
import LoginComponent from './components/LoginComponent';
import TakeNoteOnClkComponent from './components/TakeNoteOnClkComponent';
import ArchiveComponent from './components/ArchiveComponent';
import TrashComponent from './components/TrashComponent';
import NotesComponent from './components/NotesComponent';
import ProfileComponent from './components/ProfileComponent';

const router = createBrowserRouter([
  { path:'/', element:<SignUpComponent /> },
  { path:'/login', element:<LoginComponent /> },
  { path:'/home', element:<HomeComponent /> },
  { path:'/error', element:<ErrorComponent /> },
  // { path:'/noteCard', element:<NoteCardComponent updatedList={() => {}} /> },
  // { path:'/takeNote', element:<TakeNoteComponent /> },
  { 
    path:'/header',
    element:<HeaderComponent />, 
    children:
      [ { 
        path:'', 
        element:<NotesComponent />
      }, 
      { 
        path:'archive', 
        element:<ArchiveComponent /> 
      }, 
      { 
        path:'trash', 
        element:<TrashComponent /> 
      } ] 
  },
  { path:'sideBar', element:<SideBarComponent /> },
  { path:'*', element:<ErrorComponent /> },
  { path:'/takeNoteOnClk', element:<TakeNoteOnClkComponent updatedList={()=>{}} /> },
  { path:'/profile', element:<ProfileComponent /> },
  
  
  
])

// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement)
root.render(
  <React.StrictMode>
      {/* <App /> */}
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
