import React, { useEffect, useState } from "react";
import NoteCardComponent from "./NoteCardComponent";
import { getTrash } from "../utils/NoteUtil";

interface NoteObj {
    title: string,
    description: string,
    id: string,
    isPined: Boolean,
    noteIdList: string[],
    isArchived: Boolean,
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

    return (<>
        <div className="flex flex-wrap w-5/6 m-auto gap-2 mt-[-50px]" >
            {trashList.map( (val:NoteObj) => {
                return (<>
                    <NoteCardComponent data={val} updatedList={()=>{}} />
                </>)
            } )}
        </div>
    </>)
}

export default TrashComponnet;
