import React, { useState } from 'react';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import GoogleKeep from "../assets/google keep.png";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SideBarComponent from './SideBarComponent';
import CloseIcon from '@mui/icons-material/Close';
import { Outlet } from 'react-router-dom';

function HeaderComponent() {

    return (<>
        <section className='w-full flex justify-between items-center'>
            <div className='w-4/6 flex justify-between items-center'>
                <div className='w-1/4 flex justify-evenly items-center'>
                    <h1 className=''><DehazeOutlinedIcon /></h1>
                    <img src={GoogleKeep} alt="img" className='h-20 w-20' />
                    <h1 className='text-2xl'>Keep</h1>
                </div>
                <div className='group/item w-3/4 bg-white h-20 flex ml-10 items-center relative'>
                    <h1 className='absolute pl-5'><SearchOutlinedIcon /></h1>
                    <input type='text' placeholder='Search' className='w-full p-4 text-2xl bg-slate-200 pl-20 rounded-2xl text-slate-700 placeholder-slate-700 focus:bg-white focus:outline-none focus:shadow-md' />
                    <h1 className='group/edit absolute invisible left-[880px] group-hover/item:visible'><CloseIcon /></h1>
                </div>
            </div>
            <div className='w-1/6 flex gap-20 h-20 items-center'>
                <div className='flex w-1/2 justify-between'>
                    <h1><RefreshOutlinedIcon /></h1>
                    <h1><ViewAgendaOutlinedIcon /></h1>
                    <h1><SettingsOutlinedIcon /></h1>
                </div>
                <div className='flex w-2/6 justify-between mr-5'>
                    <h1><AppsOutlinedIcon /></h1>
                    <h1 className=''><AccountCircleOutlinedIcon /></h1>
                </div>
            </div>
        </section>
        <hr />
        <SideBarComponent />
        <Outlet />
    </>)
}

export default HeaderComponent;