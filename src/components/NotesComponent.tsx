import React, { useEffect, useState } from "react";
import TakeNoteOnClkComponent from "./TakeNoteOnClkComponent";
import NoteCardComponent from "./NoteCardComponent";
import { getNotes } from "../utils/NoteUtil";

interface NoteObj {
    title: string,
    description: string,
    id: string,
    isArchived: Boolean,
    isPined: Boolean,
    noteIdList: string[]
}

function NotesComponent () {

    const [notesList, setNotesList] = useState<NoteObj[]>([]);
    useEffect( () => {
        fetchNotes();
    }, [] )

    async function fetchNotes () {
        const result = await getNotes();
        setNotesList(result);
    }

    const updateNotesList = (noteObj:NoteObj, action: String) => {
        if (action == "create") {
            setNotesList([...notesList, noteObj]);
        }
        if (action == "archive") {
            console.log("ARCHIVED");
        }
    }


    return (<>
        <div className="flex mt-[-250px]" >
            <TakeNoteOnClkComponent updatedList={updateNotesList} />
        </div>
        <div className="flex flex-wrap w-5/6 m-auto gap-2 mt-10" >
            {notesList.map( (val:NoteObj) => {
                return (<>
                    <NoteCardComponent data={val} updatedList={updateNotesList} />
                </>)
            } )}
            
        </div>
    </>)
}

export default NotesComponent;