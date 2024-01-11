import React, { useState } from "react";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { addNote } from "../utils/NoteUtil";

function TakeNoteOnClkComponent ({updatedList}:{updatedList:Function}) {
    
    const [booleanVal, setBooleanVal] = useState(true);

    const handleCreateNote = () => {
        const noteData = {
            "title" : (document.getElementById("titleText")as HTMLInputElement).value,
            "description" : (document.getElementById("noteText") as HTMLInputElement).value,
            "isPined" : false,
            "isArchived" : false
        }
        setBooleanVal(true);
        addNote(noteData);
        updatedList(noteData, "create");
    }

    return (<>
        {booleanVal===true ? 
            <section className="flex justify-center mt-20 p-2 w-3/6 m-auto items-center">
                <div className="bg-white shadow-lg shadow-indigo-500/100 bg-white w-full flex justify-between rounded-xl items-center">
                    <div className="flex p-3 w-3/4">
                        <p className="text-xl w-full p-2 text-black-500" onClick={() => setBooleanVal(false)}>Take a note...</p>
                    </div>
                    <div className="p-3 flex w-1/6 justify-between">
                        <h1><CheckBoxOutlinedIcon /></h1>
                        <h1><EditOutlinedIcon /></h1>
                        <h1><ImageOutlinedIcon /></h1>
                    </div>
                </div>
            </section>   
            :
            <section className="flex justify-center mt-20 p-2 w-3/6 m-auto">
                <div className="bg-white shadow-lg shadow-indigo-500/100 bg-white w-full flex flex-col rounded-xl">
                    <div className="flex p-5 justify-between w-full">
                        <input type="text" placeholder="Title" id="titleText" className="w-4/5 p-2 font-normal text-2xl font-bold" />
                        <i className="fa-solid fa-thumbtack text-2xl text-slate-400 bg-white"></i>
                    </div>
                    <div className="p-5 mb-12 w-full">
                        <input type="text" placeholder="Take a note..." id="noteText" className="text-xl w-full p-2" />
                    </div>
                    <div className="p-5 w-full flex justify-between">
                        <div className="w-1/2 flex justify-between text-slate-500">
                            <i className="fa-regular fa-bell text-xl"></i>
                            <i className="fa-solid fa-user-plus text-xl"></i>
                            <i className="fa-solid fa-palette text-xl"></i>
                            <i className="fa-solid fa-image text-xl"></i>
                            <i className="fa-solid fa-file-arrow-down text-xl"></i>
                            <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
                            <i className="fa-solid fa-reply text-xl text-slate-300"></i>
                            <i className="fa-solid fa-share text-xl text-slate-300"></i>
                        </div>
                        <div className="mr-5">
                            <h2 className="text-xl font-bold text-slate-500" onClick={handleCreateNote}>Close</h2>
                        </div>
                    </div>
                </div>
            </section> 
    }
    </>)
}

export default TakeNoteOnClkComponent;