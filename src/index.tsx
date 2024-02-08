import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignUpComponent from './components/SignUpComponent';
import HomeComponent from './components/HomeComponent';
import ErrorComponent from './components/ErrorComponent';
import HeaderComponent from './components/HeaderComponent';
import SideBarComponent from './components/SideBarComponent';
import LoginComponent from './components/LoginComponent';
import TakeNoteOnClkComponent from './components/TakeNoteOnClkComponent';
import ArchiveComponent from './components/ArchiveComponent';
import TrashComponent from './components/TrashComponent';
import NotesComponent from './components/NotesComponent';

const router = createBrowserRouter([
  { path:'/', element:<SignUpComponent /> },
  { path:'/login', element:<LoginComponent /> },
  { path:'/home', element:<HomeComponent /> },
  { path:'/error', element:<ErrorComponent /> },
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
])

const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement)
root.render(
      <RouterProvider router={router} />
);