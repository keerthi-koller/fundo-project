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
    color?:String
}

function ArchiveComponnet () {
    const [archiveList, setArchiveList] = useState<NoteObj[]>([]);
    useEffect( () => {
        fetchArchives();
    }, [] )

     const fetchArchives = async () => {
        const result = await getArchive();
        setArchiveList(result.filter( (ele:any) => !ele.isDeleted && ele.isArchived ));
    }

    const updateArchiveList = (noteObj:NoteObj, action:String) => {
        if (action == "archiveTrash") {
            setArchiveList(archiveList.filter( ele => ele.id != noteObj.noteIdList[0] ));
        }
        if (action == "unArchive") {
            setArchiveList(archiveList.filter( ele => ele.id != noteObj.noteIdList[0] ));
        }
        if (action == "archiveUpdate") {
            fetchArchives();
        }
    }

    return (<>
        <div className="grid grid-cols-4 w-full m-auto gap-2 mt-[-50px]" >
            {archiveList.map( (val:NoteObj) => {
                return (<>
                    <NoteCardComponent data={val} pin={false} updatedList={updateArchiveList} />
                </>)
            } )}
        </div>
    </>)
}

export default ArchiveComponnet;