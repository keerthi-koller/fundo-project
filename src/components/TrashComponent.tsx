import React, { useEffect, useState } from "react";
import NoteCardComponent from "./NoteCardComponent";
import { deleteTrash, getTrash } from "../utils/NoteUtil";

interface NoteObj {
    title: string,
    description: string,
    id: string,
    isPined: Boolean,
    noteIdList: string[],
    isArchived: Boolean,
    color?:String
}

function TrashComponnet () {
    const [trashList, setTrashList] = useState<NoteObj[]>([]);
    useEffect( () => {
        fetchTrash();
    }, [] )

    async function fetchTrash () {
        const result = await getTrash();
        setTrashList(result);
    }

    const updateTrashList = (noteObj:NoteObj, action:String) => {
        if (action == "delete") {
            setTrashList(trashList.filter( ele => ele.id != noteObj.noteIdList[0] ));         
        }
        if (action == "restore") {
            setTrashList(trashList.filter( ele => ele.id != noteObj.noteIdList[0] ));
        }
    }

    return (<>
        <div className="flex flex-wrap w-5/6 m-auto gap-2 mt-[-50px]" >
            {trashList.map( (val:NoteObj) => {
                return (<>
                    <NoteCardComponent data={val} pin={false} updatedList={updateTrashList} />
                </>)
            } )}
        </div>
    </>)
}

export default TrashComponnet;
