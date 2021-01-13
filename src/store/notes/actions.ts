import { Note } from "../../models/notes";
import {
  NoteActionTypes,
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  OPEN_NOTE,
  CLOSE_FORM,
} from "./types";

export const addNote = (note: Note): NoteActionTypes => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};

export const updateNote = (note: Note): NoteActionTypes => {
  return {
    type: UPDATE_NOTE,
    payload: note,
  };
};

export const deleteNote = (id: string): NoteActionTypes => {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
};

export const openNote = (note: Note): NoteActionTypes => {
  return {
    type: OPEN_NOTE,
    payload: note,
  };
};

export const closeForm = (): NoteActionTypes => {
  return {
    type: CLOSE_FORM,
  };
};
