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
    noteIdList: string[],
    noteId:String,
    color?:String
}

function NotesComponent () {

    const [notesList, setNotesList] = useState<NoteObj[]>([]);
    const [pinNotesList, setPinNotesList] = useState<NoteObj[]>([]);

    useEffect( () => {
        fetchPinedNotes();
        fetchNotes();
    }, [] )

    async function fetchNotes () {
        const result = await getNotes()
        setNotesList(result.filter((obj:any) => !obj.isArchived && !obj.isDeleted && !obj.isPined));
    }

    async function fetchPinedNotes () {
        const result = await getNotes();
        setPinNotesList(result.filter( (obj:any) => obj.isPined && !obj.isDeleted && !obj.isArchived ));
    }

    const updateNotesList = (noteObj:NoteObj, action:String) => {
        if (action == "create") {
            setNotesList([...notesList, noteObj]);
        }
        if (action == "archive") {
            setNotesList(notesList.filter( ele => ele.id != noteObj.noteIdList[0] ));
        }
        if (action == "trash") {
            setNotesList(notesList.filter( ele => ele.id != noteObj.noteIdList[0] ));
        }
        if (action == "update") {
            fetchNotes();
        }
        if (action == "changeBgColor") {
            fetchNotes();
        }
        if (action == "pinNote") {
            setNotesList(notesList.filter( ele => ele.id != noteObj.noteIdList[0] ));
            fetchPinedNotes();
        }
        if (action == "unPinNote") {
            setPinNotesList(pinNotesList.filter( ele => ele.id != noteObj.noteIdList[0] ));
            fetchNotes();
        }
    }


    return (<>
        <div className="flex mt-[-250px]" >
            <TakeNoteOnClkComponent updatedList={updateNotesList} />
        </div>
        <div className="flex flex-wrap w-5/6 m-auto gap-2 mt-10" >
            {pinNotesList.length == 0 ? "" : <h1 className="block font-bold">Pinned</h1>}
            {pinNotesList.map( (val:NoteObj) => {
                return (<>
                    <NoteCardComponent data={val} pin={true} updatedList={updateNotesList} />
                </>)
            } )}      
        </div>
        {pinNotesList.length == 0 ? "" : <hr className="mt-10 h-[2px] bg-slate-400" />}
        {notesList.length == 0 ? <h1 className="block font-bold">Notes are empty</h1> : <h1 className="block font-bold">Others</h1>}
        <div className="grid grid-cols-4 w-full m-auto gap-2" >
            {notesList.map( (val:NoteObj) => {
                return (<>
                    <NoteCardComponent data={val} pin={false} updatedList={updateNotesList} />
                </>)
            } )}
        </div>
    </>)
}

export default NotesComponent;