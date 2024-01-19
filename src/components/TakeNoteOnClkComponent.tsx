import React, { useState } from "react";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { addNote } from "../utils/NoteUtil";
import Button from "@mui/material/Button";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoIcon from '@mui/icons-material/Undo';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import { TextField } from "@mui/material";

function TakeNoteOnClkComponent ({updatedList}:{updatedList:Function}) {
    
    const [displayCard, setDisplayCard] = useState(true);

    const handleCreateNote = () => {
        const noteData = {
            "title" : (document.getElementById("titleText")as HTMLInputElement).value,
            "description" : (document.getElementById("noteText") as HTMLInputElement).value,
            "isPined" : false,
            "isArchived" : false
        }
        setDisplayCard(true);
        addNote(noteData);
        updatedList(noteData, "create");
    }

    return (<>
        {displayCard===true ? 
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
                <div className="bg-white shadow-lg shadow-indigo-500/100 bg-white w-full flex gap-2 mt-2 flex-col rounded-xl">
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
                            <h1 className="text-xl"><ColorLensOutlinedIcon /></h1>
                            <h1 className="text-xl"><AddPhotoAlternateOutlinedIcon /></h1>
                            <h1 className="text-xl"><ArchiveOutlinedIcon /></h1>
                            <h1 className="text-xl"><MoreVertOutlinedIcon /></h1>
                            <h1 className="text-xl text-slate-500"><UndoIcon /></h1>
                            <h1 className="text-xl text-slate-500"><RedoOutlinedIcon /></h1>
                        </div>
                        <div className="mr-[50px]">
                            <Button className="shadow shadow-indigo-500/100" onClick={ () => { handleCreateNote(); } } sx={{color:"black", fontSize:13, marginRight:"64px"}}>Close</Button>
                        </div>
                    </div>
                </div>
            </section> 
    }
    </>)
}

export default TakeNoteOnClkComponent;