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
    const accessToken = localStorage.getItem("accessToken");
    const res =  await axios.get(`${REACT_APP_BASE_URL}notes/getNotesList?access_token=${accessToken}`, configForGetNotes);
    return res.data.data.data;
}

export const addArchive = async (obj:Object) => {
    const accessToken = localStorage.getItem("accessToken");
    await axios.post(`${REACT_APP_BASE_URL}notes/archiveNotes?access_token=${accessToken}`, JSON.stringify(obj), configForAddNotes);    
}

export const getArchive = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const res =  await axios.get(`${REACT_APP_BASE_URL}notes/getArchiveNotesList?access_token=${accessToken}`, configForGetNotes);
    return res.data.data.data;
}

export const addTrash = async (obj:Object) => {
    const id = localStorage.getItem("accessToken");
    await axios.post(`${REACT_APP_BASE_URL}notes/trashNotes?access_token=${id}`, JSON.stringify(obj), configForAddNotes);    
}

export const getTrash = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const res =  await axios.get(`${REACT_APP_BASE_URL}notes/getTrashNotesList?access_token=${accessToken}`, configForGetNotes);
    return res.data.data.data;
}

export const deleteTrash = async (obj:any) => {
    await axios.post(`${REACT_APP_BASE_URL}notes/deleteForeverNotes`, obj, configForAddNotes);
}

export const updateNote = async (obj:any) => {
    await axios.post(`${REACT_APP_BASE_URL}notes/updateNotes`, obj, configForAddNotes);
}

export const changeBgColor = async (obj:any) => {
    await axios.post(`${REACT_APP_BASE_URL}notes/changesColorNotes`, JSON.stringify(obj), configForAddNotes);
}

export const pinUnpinNotes = async (obj:any) => {
    const accessToken = localStorage.getItem("accessToken");
    await axios.post(`${REACT_APP_BASE_URL}notes/pinUnpinNotes?access_token=${accessToken}`, JSON.stringify(obj), configForAddNotes);
}