import React, { useState } from "react";
import { addArchive, addTrash, changeBgColor, deleteTrash, pinUnpinNotes, updateNote } from "../utils/NoteUtil";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import FormatColorResetOutlinedIcon from '@mui/icons-material/FormatColorResetOutlined';
import Modal from '@mui/material/Modal';
import { useLocation, useNavigate } from "react-router-dom";
import { Button, IconButton, TextField } from "@mui/material";
import UndoIcon from '@mui/icons-material/Undo';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PushPinSharpIcon from '@mui/icons-material/PushPinSharp';

interface NoteObj {
    title: string,
    description: string,
    id: string,
    isArchived: Boolean,
    isPined: Boolean,
    color?:String
} 

function NoteCardComponent ({data, updatedList, pin}:{data:NoteObj,updatedList:Function, pin:Boolean}) {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openColor = Boolean(anchorEl);
    const handleClickColor = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseColor = () => {
        setAnchorEl(null);
    };

    const [anchorElMore, setAnchorElMore] = useState<null | HTMLElement>(null);
    const openMore = Boolean(anchorElMore);
    const handleClickMore = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElMore(event.currentTarget);
    };
    const handleCloseMore = () => {
        setAnchorElMore(null);
    };

    // const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        if (routeLocation !== "/header/trash") {
            setOpen(true);
            // navigate(`/notes?id=${data.id}`);
        }
    };
    const handleClose = () => {
        setOpen(false);
        // navigate(``);
    };
  
    const routeLocation = useLocation().pathname;

    const handleArchiveNote = () => {
        const noteId = data.id;

        const noteData = {
            "noteIdList":[`${noteId}`],
            "isArchived":true
            }
        addArchive(noteData);
        updatedList(noteData, "archive");
    }

    const handleUpdateNote = () => {
        const noteId = data.id;
        const noteData = {
            "noteId":noteId,
            "title" : (document.getElementById("titleText")as HTMLInputElement).value,
            "description" : (document.getElementById("noteText") as HTMLInputElement).value,
        }
        updateNote(noteData);
        updatedList(noteData, "update");
    }

    const handleUpdateArchive = () => {
        const noteId = data.id;
        const noteData = {
            "noteId":noteId,
            "title" : (document.getElementById("titleText")as HTMLInputElement).value,
            "description" : (document.getElementById("noteText") as HTMLInputElement).value,
        }
        updateNote(noteData);
        updatedList(noteData, "archiveUpdate");
    }

    const handleUnArchiveNote = () => {
        const noteId = data.id;

        const noteData = {
            "noteIdList":[`${noteId}`],
            "isArchived":false
            }
        addArchive(noteData);
        updatedList(noteData, "unArchive");
    }

    const handleTrashNote = () => {
        const noteId = data.id;

        const noteData = {
            "noteIdList":[`${noteId}`],
            "isDeleted":true
            }
        addTrash(noteData);
        updatedList(noteData, "trash");
        updatedList(noteData, "archiveTrash");
    }

    const deleteForver = () => {
        const noteId = data.id;

        const noteData = {
            "noteIdList":[`${noteId}`],
            }
        updatedList(noteData, "delete");
        deleteTrash(noteData);
    }

    const restore = () => {
        const noteId = data.id;

        const noteData = {
            "noteIdList":[`${noteId}`],
            "isDeleted":false,
            "isArchived":false
            }
        addTrash(noteData);
        addArchive(noteData);
        updatedList(noteData, "restore");
    }

    const colorVal = (colorName:String) => {
        const noteId = data.id;

        const noteData = {
            "noteIdList":[`${noteId}`],
            "color":colorName,
            }
            
        changeBgColor(noteData);
        updatedList(noteData, "changeBgColor");
    }

    const pinNote = () => {
        const noteId = data.id;

        const noteData = {
            "noteIdList":[`${noteId}`],
            "isPined":true,
            }
            
        pinUnpinNotes(noteData);
        updatedList(noteData, "pinNote");
    }

    const unPinNote = () => {
        const noteId = data.id;

        const noteData = {
            "noteIdList":[`${noteId}`],
            "isPined":false,
            }
            
        pinUnpinNotes(noteData);
        updatedList(noteData, "unPinNote");
    }
    

    return (<>
                <section className="group/item1 flex mt-10 xl:mt-20 xl:m-auto ml-1 w-[150px] xl:w-[250px] relative">
                    <div className="group/edit invisible group-hover/item1:visible">
                        <h1 className="bg-white w-[25px] h-[20px] rounded-full absolute left-[-10px] top-[-10px]"><CheckCircleIcon sx={{fontSize: 30}} /></h1>
                    </div>
                    <div id="cardDiv" className="border-[3px] w-full flex flex-col rounded-xl" style={{backgroundColor:`${data.color}`}}>
                        <div className="flex p-5 w-full justify-between text-wrap">
                            <h1 className="font-normal text-2xl font-bold" onClick={handleOpen}>{data.title}</h1>
                            { pin ?
                                <IconButton color="secondary" title="unPin" className="text-2xl mt-[-10px] text-black-600 group/edit invisible group-hover/item1:visible" onClick={unPinNote} ><PushPinSharpIcon /></IconButton>
                                :
                                <IconButton title="Pin" className="text-2xl mt-[-10px] text-black-600 group/edit invisible group-hover/item1:visible" onClick={pinNote} ><PushPinOutlinedIcon /></IconButton>    
                            }
                        </div>
                        <div className="ml-5 w-full mr-5 text-wrap" onClick={handleOpen}>
                            <textarea value={data.description} className="p-1 text-xl resize-none h-auto w-5/6 bg-transparent outline-none" readOnly/>
                        </div>
                        <div className="p-2 flex justify-between w-full">
                            {routeLocation == "/header/trash" ?
                            <>
                                <IconButton style={{color:"black"}} title="DeleteForever" className="text-xl group/edit invisible group-hover/item1:visible text-slate-700" onClick={deleteForver} ><DeleteForeverIcon sx={{fontSize:25}} /></IconButton>
                                <IconButton style={{color:"black"}} title="Restore" className="text-xl group/edit invisible group-hover/item1:visible text-slate-700" onClick={restore} ><RestoreFromTrashIcon sx={{fontSize:25}} /></IconButton>
                            </>
                            :    
                            <>
                                <IconButton style={{color:"black"}} title="alert" className="text-xl group/edit invisible group-hover/item1:visible text-slate-700" ><AddAlertOutlinedIcon sx={{fontSize:25}} /></IconButton>
                                <IconButton style={{color:"black"}} title="user" className="text-xl group/edit invisible group-hover/item1:visible text-slate-700" ><PersonAddAlt1OutlinedIcon sx={{fontSize:25}} /></IconButton>
                                <IconButton style={{color:"black"}} id="basic-button" title="color" className="text-xl group/edit invisible group-hover/item1:visible text-slate-700" onClick={handleClickColor}><ColorLensOutlinedIcon sx={{fontSize:20}} /></IconButton>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={openColor}
                                    onClose={handleCloseColor}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                            <section className="flex">
                                                <MenuItem onClick={handleCloseColor}><div title="default" onClick={ () => colorVal("#FFFFFF") } className="flex w-[40px] h-[40px] bg-white border border-fuchsia-600 border-4 rounded-full flex justify-center items-center"><FormatColorResetOutlinedIcon /></div></MenuItem>
                                                <MenuItem onClick={handleCloseColor}><div title="orange" onClick={ () => colorVal("#FF9900") } className="w-[40px] h-[40px] bg-orange-500 rounded-full"></div></MenuItem>
                                                <MenuItem onClick={handleCloseColor}><div title="pink" onClick={ () => colorVal("#FFC0CB") } className="w-[40px] h-[40px] bg-pink-400 rounded-full"></div></MenuItem>
                                                <MenuItem onClick={handleCloseColor}><div title="indigo" onClick={ () => colorVal("#4B0082") } className="w-[40px] h-[40px] bg-indigo-900 rounded-full"></div></MenuItem>
                                                <MenuItem onClick={handleCloseColor}><div title="teal" onClick={ () => colorVal("#008080") } className="w-[40px] h-[40px] bg-teal-600 rounded-full"></div></MenuItem>
                                                <MenuItem onClick={handleCloseColor}><div title="blue" onClick={ () => colorVal("#0000FF") } className="w-[40px] h-[40px] bg-blue-600 rounded-full"></div></MenuItem>
                                            </section>
                                            <section className="flex">
                                                <MenuItem onClick={handleCloseColor}><div title="green" onClick={ () => colorVal("#03C03C") } className="w-[40px] h-[40px] bg-green-500 rounded-full"></div></MenuItem>
                                                <MenuItem onClick={handleCloseColor}><div title="lime" onClick={ () => colorVal("#00FF00") } className="w-[40px] h-[40px] bg-lime-400 rounded-full"></div></MenuItem>
                                                <MenuItem onClick={handleCloseColor}><div title="fuchsia" onClick={ () => colorVal("#ff00ff") } className="w-[40px] h-[40px] bg-fuchsia-600 rounded-full"></div></MenuItem>
                                                <MenuItem onClick={handleCloseColor}><div title="yellow" onClick={ () => colorVal("#FFFF00") } className="w-[40px] h-[40px] bg-yellow-300 rounded-full"></div></MenuItem>
                                                <MenuItem onClick={handleCloseColor}><div title="purple" onClick={ () => colorVal("#A020F0") } className="w-[40px] h-[40px] bg-purple-500 rounded-full"></div></MenuItem>
                                                <MenuItem onClick={handleCloseColor}><div title="red" onClick={ () => colorVal("#FF0000") } className="w-[40px] h-[40px] bg-red-600 rounded-full"></div></MenuItem>
                                            </section>
                                </Menu>
                                <IconButton style={{color:"black"}} title="addPhoto" className="text-xl group/edit invisible group-hover/item1:visible text-slate-700" ><AddPhotoAlternateOutlinedIcon /></IconButton>
                                {routeLocation == "/header/archive" ? 
                                <IconButton style={{color:"black"}} title="unArchive" className="text-xl group/edit invisible group-hover/item1:visible text-slate-700" onClick={handleUnArchiveNote}><UnarchiveIcon /></IconButton>
                                :
                                <IconButton style={{color:"black"}} title="archive" className="text-xl group/edit invisible group-hover/item1:visible text-slate-700" onClick={handleArchiveNote}><ArchiveOutlinedIcon /></IconButton>
                                }
                                <IconButton style={{color:"black"}} id="basic-button" title="more" className="text-xl group/edit invisible group-hover/item1:visible text-slate-700" onClick={handleClickMore}><MoreVertOutlinedIcon /></IconButton>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorElMore}
                                    open={openMore}
                                    onClose={handleCloseMore}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <section className="flex">
                                        <MenuItem onClick={handleCloseMore}><p className="p-2 text-[17px]" onClick={ () => { handleTrashNote()} }>Delete Note</p></MenuItem>
                                    </section>
                                </Menu>
                            </>
                            }
                        </div>
                    </div>
                </section>

                <Modal
                            open={open}
                            onClose={handleClose}
                            className="w-[500px] h-[250px] rounded-2xl flex justify-center m-auto"
                >
                            <section className="flex justify-center w-full h-full m-auto">
                                <div className="shadow-lg shadow-indigo-500/100 bg-white w-full flex gap-2 pt-2 flex-col rounded-xl" style={{backgroundColor:`${data.color}`}}>
                                    <div className="flex pl-5 gap-2 justify-between w-full">
                                        <TextField id="titleText" defaultValue={data.title} type="text" variant="outlined" className="w-5/6 p-2 font-normal text-2xl font-bold outline-none" />
                                        <h1 className="text-2xl text-black-500"><PushPinOutlinedIcon sx={{fontSize:35}} /></h1>
                                    </div>
                                    <div className="pl-5 mb-12 w-full">
                                        <TextField defaultValue={data.description} type="text" id="noteText" variant="outlined" className="text-xl w-5/6 p-2" />
                                    </div>
                                    <div className="pl-5 pr-5 w-full flex justify-between">
                                        <div className="w-3/4 flex gap-2 text-black-100">
                                            <IconButton style={{color:"black", width:"50px"}} title="alert" className=""><AddAlertOutlinedIcon /></IconButton>
                                            <IconButton style={{color:"black"}} title="user" className=""><PersonAddAlt1OutlinedIcon /></IconButton>
                                            <IconButton style={{color:"black"}} title="color" onClick={handleClickColor}><ColorLensOutlinedIcon /></IconButton>
                                            <IconButton style={{color:"black"}} title="addPhoto" className=""><AddPhotoAlternateOutlinedIcon /></IconButton>
                                            <IconButton style={{color:"black"}} title="archive" className=""><ArchiveOutlinedIcon /></IconButton>
                                            <IconButton style={{color:"black"}} title="more"><MoreVertOutlinedIcon /></IconButton>
                                            <IconButton style={{color:"black"}} title="undo"><UndoIcon /></IconButton>
                                            <IconButton style={{color:"black"}} title="redo"><RedoOutlinedIcon /></IconButton>
                                        </div>
                                        <div>
                                            <Button className="shadow shadow-indigo-500/100" onClick={ () => { handleUpdateNote(); handleUpdateArchive(); handleClose(); } } sx={{color:"black", fontSize:13}}>Close</Button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                </Modal>
            </>)
}

export default NoteCardComponent;