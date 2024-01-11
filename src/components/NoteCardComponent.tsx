import React from "react";
import { addArchive } from "../utils/NoteUtil";

interface NoteObj {
    title: string,
    description: string,
    id: string,
    isArchived: Boolean,
    isPined: Boolean
} 

function NoteCardComponent ({data, updatedList}:{data:NoteObj,updatedList:Function}) {

    const handleArchiveNote = () => {
        const noteId = data.id;

        const noteData = {
            "noteIdList":[`${noteId}`],
            "isArchived":true
            }
        addArchive(noteData);
        updatedList(noteData, "archive");
    }

    const handleTrashNote = () => {
        const noteId = data.id;

        const noteData = {
            "noteIdList":[`${noteId}`],
            "isArchived":true
            }
        addArchive(noteData);
        updatedList(noteData, "archive");
    }
    

    return (<>
        <section className="group/item1 flex justify-center mt-20 p-2 w-1/5 m-auto relative">
            <div className="group/edit invisible group-hover/item1:visible">
                <i className="fa-solid fa-circle-check text-2xl absolute left-0 top-0"></i>
            </div>
            <div className="bg-white shadow-lg shadow-indigo-500/100 bg-white w-full flex flex-col rounded-xl">
                <div className="flex p-5 justify-between">
                    <h1 className="font-normal text-2xl font-bold">{data.title}</h1>
                    <i className="fa-solid fa-thumbtack text-2xl text-slate-400 bg-white group/edit invisible group-hover/item1:visible"></i>
                </div>
                <div className="ml-5 mr-5 text-wrap">
                    <p className="text-xl text-wrap h-auto">{data.description}</p>
                    {/* <p className="text-xl">-npm install @types/react</p>
                    <p className="text-xl">@types/react-dom</p> */}
                </div>
                <div className="p-5 w-full flex justify-between">
                    <i className="fa-regular fa-bell text-xl group/edit invisible group-hover/item1:visible text-slate-700"></i>
                    <i className="fa-solid fa-user-plus text-xl group/edit invisible group-hover/item1:visible text-slate-700"></i>
                    <i className="fa-solid fa-palette text-xl group/edit invisible group-hover/item1:visible text-slate-700"></i>
                    <i className="fa-solid fa-image text-xl group/edit invisible group-hover/item1:visible text-slate-700"></i> 
                    <i className="fa-solid fa-file-arrow-down text-xl group/edit invisible group-hover/item1:visible text-slate-700" onClick={handleArchiveNote}></i>
                    <i className="fa-solid fa-ellipsis-vertical text-xl group/edit invisible group-hover/item1:visible text-slate-700" onClick={handleTrashNote}></i>
                </div>
            </div>
        </section>
    </>)
}

export default NoteCardComponent;