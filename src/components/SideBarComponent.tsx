import React from 'react';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useNavigate } from 'react-router-dom';

function SideBarComponent () {

    const navigate = useNavigate();

    return (<>
        <section className='flex flex-col w-1/5 mt-2 border'>
            <div className='group/item flex gap-10 p-3 pl-8 hover:bg-slate-100 duration-500 rounded-r-full h-[70px] items-center' onClick={() => navigate("")}>
                <h1 className='bg-amber-100 w-12 h-12 flex justify-center items-center rounded-full' onClick={() => navigate("")}><LightbulbOutlinedIcon /></h1>
                <p className='group/edit invisible group-hover/item:visible text-xl' onClick={() => navigate("")}>Notes</p>
            </div>
            <div className='group/item flex gap-10 p-3 pl-8 hover:bg-slate-100 duration-500 rounded-r-full h-[70px] items-center' onClick={() => navigate("archive")}>
                <h1 className='bg-amber-100 w-12 h-12 flex justify-center items-center rounded-full' onClick={() => navigate("archive")}><ArchiveOutlinedIcon /></h1>
                <p className='group/edit invisible group-hover/item:visible text-xl' onClick={() => navigate("archive")}>Archive</p>
            </div>
            <div className='group/item flex gap-10 p-3 pl-8 hover:bg-slate-100 duration-500 rounded-r-full h-[70px] items-center' onClick={() => navigate("trash")}>
                <h1 className='bg-amber-100 w-12 h-12 flex justify-center items-center rounded-full' onClick={() => navigate("trash")}><DeleteOutlinedIcon /></h1>
                <p className='group/edit invisible group-hover/item:visible text-xl' onClick={() => navigate("trash")}>Trash</p>
            </div>
        </section>
    </>)
}

export default SideBarComponent;