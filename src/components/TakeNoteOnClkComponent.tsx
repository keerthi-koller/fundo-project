import React, { useState } from "react";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { addNote, changeBgColor } from "../utils/NoteUtil";
import Button from "@mui/material/Button";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import FormatColorResetOutlinedIcon from '@mui/icons-material/FormatColorResetOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoIcon from '@mui/icons-material/Undo';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import { IconButton, Menu, MenuItem, TextField } from "@mui/material";

function TakeNoteOnClkComponent({ updatedList }: { updatedList: Function }) {

    const [displayCard, setDisplayCard] = useState(true);
    const [bgColor, setBgColor] = useState("");
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openColor = Boolean(anchorEl);

    // const setBgColorr = (colorName:String) => {
    //     // const noteId = data.id;

    //     const noteData = {
    //         // "noteIdList":[`${noteId}`],
    //         "color":colorName,
    //         }

    //     changeBgColor(noteData);
    //     updatedList(noteData, "changeBgColor");
    // }

    const handleCloseColor = () => {
        setAnchorEl(null);
    };

    const handleClickColor = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCreateNote = () => {
        const noteData = {
            "title": (document.getElementById("titleText") as HTMLInputElement).value,
            "description": (document.getElementById("noteText") as HTMLInputElement).value,
            "isPined": false,
            "isArchived": false,
            "color": bgColor,
        }
        setDisplayCard(true);
        addNote(noteData);
        updatedList(noteData, "create");
    }

    return (<>
        {displayCard === true ?
            <section className="flex justify-center mt-[250px] p-2 w-3/6 m-auto items-center">
                <div className="bg-white shadow-lg shadow-indigo-500/100 bg-white w-full flex justify-between rounded-xl items-center">
                    <div className="flex p-3 w-3/4">
                        <p className="text-xl w-full p-2 text-black-500" onClick={() => setDisplayCard(false)}>Take a note...</p>
                    </div>
                    <div className="p-3 flex w-1/6 justify-between">
                        <h1><CheckBoxOutlinedIcon /></h1>
                        <h1><BrushOutlinedIcon /></h1>
                        <h1><ImageOutlinedIcon /></h1>
                    </div>
                </div>
            </section>
            :
            <section className="flex justify-center mt-[250px] h-[250px] p-2 w-3/6 m-auto">
                <div className="bg-white shadow-lg shadow-indigo-500/100 bg-white w-full flex gap-2 mt-2 flex-col rounded-xl" style={{ backgroundColor: `${bgColor}` }}>
                    <div className="flex pl-5 gap-2 mt-2 justify-between w-full">
                        <TextField placeholder="Title" id="titleText" type="text" variant="outlined" className="w-5/6 p-2 font-normal text-2xl font-bold" />
                        <h1 className="text-2xl mr-5 text-black-500 bg-white"><PushPinOutlinedIcon /></h1>
                    </div>
                    <div className="pl-5 mb-5 w-full">
                        <TextField placeholder="Take a note..." type="text" id="noteText" variant="outlined" className="text-xl w-5/6 p-2" />
                    </div>
                    <div className="pl-5 w-full flex justify-between">
                        <div className="w-1/2 flex justify-between text-black-100">
                            <h1 className="text-xl"><AddAlertOutlinedIcon /></h1>
                            <h1 className="text-xl"><PersonAddAlt1OutlinedIcon /></h1>
                            <IconButton onClick={handleClickColor}><ColorLensOutlinedIcon /></IconButton>
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
                                    <MenuItem onClick={handleCloseColor}><div title="default" onClick={() => setBgColor("#FFFFFF")} className="flex w-[40px] h-[40px] bg-white border border-fuchsia-600 border-4 rounded-full flex justify-center items-center"><FormatColorResetOutlinedIcon /></div></MenuItem>
                                    <MenuItem onClick={handleCloseColor}><div title="orange" onClick={() => setBgColor("#FF9900")} className="w-[40px] h-[40px] bg-orange-500 rounded-full"></div></MenuItem>
                                    <MenuItem onClick={handleCloseColor}><div title="pink" onClick={() => setBgColor("#FFC0CB")} className="w-[40px] h-[40px] bg-pink-400 rounded-full"></div></MenuItem>
                                    <MenuItem onClick={handleCloseColor}><div title="indigo" onClick={() => setBgColor("#4B0082")} className="w-[40px] h-[40px] bg-indigo-900 rounded-full"></div></MenuItem>
                                    <MenuItem onClick={handleCloseColor}><div title="teal" onClick={() => setBgColor("#008080")} className="w-[40px] h-[40px] bg-teal-600 rounded-full"></div></MenuItem>
                                    <MenuItem onClick={handleCloseColor}><div title="blue" onClick={() => setBgColor("#0000FF")} className="w-[40px] h-[40px] bg-blue-600 rounded-full"></div></MenuItem>
                                </section>
                                <section className="flex">
                                    <MenuItem onClick={handleCloseColor}><div title="green" onClick={() => setBgColor("#03C03C")} className="w-[40px] h-[40px] bg-green-500 rounded-full"></div></MenuItem>
                                    <MenuItem onClick={handleCloseColor}><div title="lime" onClick={() => setBgColor("#00FF00")} className="w-[40px] h-[40px] bg-lime-400 rounded-full"></div></MenuItem>
                                    <MenuItem onClick={handleCloseColor}><div title="fuchsia" onClick={() => setBgColor("#ff00ff")} className="w-[40px] h-[40px] bg-fuchsia-600 rounded-full"></div></MenuItem>
                                    <MenuItem onClick={handleCloseColor}><div title="yellow" onClick={() => setBgColor("#FFFF00")} className="w-[40px] h-[40px] bg-yellow-300 rounded-full"></div></MenuItem>
                                    <MenuItem onClick={handleCloseColor}><div title="purple" onClick={() => setBgColor("#A020F0")} className="w-[40px] h-[40px] bg-purple-500 rounded-full"></div></MenuItem>
                                    <MenuItem onClick={handleCloseColor}><div title="red" onClick={() => setBgColor("#FF0000")} className="w-[40px] h-[40px] bg-red-600 rounded-full"></div></MenuItem>
                                </section>
                            </Menu>
                            <h1 className="text-xl"><AddPhotoAlternateOutlinedIcon /></h1>
                            <h1 className="text-xl"><ArchiveOutlinedIcon /></h1>
                            <h1 className="text-xl"><MoreVertOutlinedIcon /></h1>
                            <h1 className="text-xl text-slate-500"><UndoIcon /></h1>
                            <h1 className="text-xl text-slate-500"><RedoOutlinedIcon /></h1>
                        </div>
                        <div className="mr-[50px]">
                            <Button className="shadow shadow-indigo-500/100" onClick={() => { handleCreateNote(); setBgColor("") }} sx={{ color: "black", fontSize: 13, marginRight: "64px" }}>Close</Button>
                        </div>
                    </div>
                </div>
            </section>
        }
    </>)
}

export default TakeNoteOnClkComponent;