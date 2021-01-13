import React, { createContext } from "react";
import { Provider } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import {
  addNote,
  updateNote,
  deleteNote,
  openNote,
  closeForm,
} from "../../store/notes/actions";
import { Note } from "../../models/notes";
import { store } from "../../store/index";

let moment = require("moment");

export const NoteContext = createContext<Note[]>(store.getState().notes);

export const NoteProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

interface NoteHook {
  getAllIds: () => Array<string>;
  get: (id: string) => Note;
  add: (text: string) => void;
  save: (id: string, text: string) => void;
  remove: (string) => void;
  open: (note: Note) => void;
  close: () => void;
}

export const useNotes = (): NoteHook => {
  const { notes, noteFormOpen, selectedNote } = store.getState().notes;
  const { dispatch } = store;

  return {
    getAllIds: () => notes.map((n) => n.id),
    get: (id: string) => notes.find((n) => n.id === id),
    save: (id: string, text: string): void => {
      const note: Note = {
        id,
        text,
        dateCreated: moment(),
      };
      dispatch(updateNote(note));
    },
    add: (text: string) => {
      const newNote: Note = {
        id: uuidv4(),
        text,
        dateCreated: moment(),
      };
      dispatch(addNote(newNote));
    },
    remove: (id: string) => dispatch(deleteNote(id)),
    open: (note: Note) => dispatch(openNote(note)),
    close: () => dispatch(closeForm()),
  };
};
