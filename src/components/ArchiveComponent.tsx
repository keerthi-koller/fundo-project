import React, { useEffect, useState } from "react";
import NoteCardComponent from "./NoteCardComponent";
import { getArchive, getNotes } from "../utils/NoteUtil";

interface NoteObj {
    title: string,
    description: string,
    id: string,
    isPined: Boolean,
    noteIdList: string[],
    isArchived: Boolean,
}

function ArchiveComponnet () {
    const [archiveList, setArchiveList] = useState<NoteObj[]>([]);
    useEffect( () => {
        fetchArchives();
    }, [] )

     const fetchArchives = async () => {
        const result = await getArchive();
        setArchiveList(result);
    }

    return (<>
        <div className="flex flex-wrap w-5/6 m-auto gap-2 mt-[-50px]" >
            {archiveList.map( (val:NoteObj) => {
                return (<>
                    <NoteCardComponent data={val} updatedList={()=>{}} />
                </>)
            } )}
        </div>
    </>)
}

export default ArchiveComponnet;