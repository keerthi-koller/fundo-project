import axios from "axios";

const REACT_APP_BASE_URL = "https://fundoonotes.incubation.bridgelabz.com/api/";

const configForAddNotes = {
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("accessToken")
    }
}

const configForGetNotes = {
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("accessToken")
    }
}

export const addNote = async (obj: Object) => {
    await axios.post(`${REACT_APP_BASE_URL}notes/addNotes`, JSON.stringify(obj), configForAddNotes);
}

export const getNotes = async () => {
    const id = localStorage.getItem("accessToken");
    const res =  await axios.get(`${REACT_APP_BASE_URL}notes/getNotesList?access_token=${id}`, configForGetNotes);
    return res.data.data.data;
}

export const addArchive = async (obj:Object) => {
    const id = localStorage.getItem("accessToken");
    await axios.post(`${REACT_APP_BASE_URL}notes/archiveNotes?access_token=${id}`, JSON.stringify(obj), configForAddNotes);    
}

export const getArchive = async () => {
    const id = localStorage.getItem("accessToken");
    const res =  await axios.get(`${REACT_APP_BASE_URL}notes/getArchiveNotesList?access_token=${id}`, configForGetNotes);
    return res.data.data.data;
}

export const getTrash = async () => {
    const id = localStorage.getItem("accessToken");
    const res =  await axios.get(`${REACT_APP_BASE_URL}notes/getTrashNotesList?access_token=${id}`, configForGetNotes);
    console.log(res);
    
    return res.data.data.data;
}