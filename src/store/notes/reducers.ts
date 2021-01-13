import {
  NoteActionTypes,
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  OPEN_NOTE,
  CLOSE_FORM,
  NoteState,
} from "./types";
import { Note } from "../../models/notes";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../../modules/notes/persistNotes";

// export const initialState: Array<Note> = loadFromLocalStorage("notes");

export const initialState: NoteState = {
  notes: loadFromLocalStorage("notes"),
  selectedNote: undefined,
  noteFormOpen: false,
};

export function noteReducer(
  state = initialState,
  action: NoteActionTypes
): NoteState {
  let newNotes: Array<Note> = [];
  switch (action.type) {
    case ADD_NOTE:
      newNotes = [...state.notes, action.payload];
      saveToLocalStorage("notes", newNotes);
      return {
        ...state,
        notes: newNotes,
      };
    case UPDATE_NOTE:
      newNotes = [...state.notes];
      const index = newNotes.findIndex((n) => n.id === action.payload.id);
      if (index > -1) {
        newNotes[index] = action.payload;
        saveToLocalStorage("notes", newNotes);
        return {
          ...state,
          notes: newNotes,
        };
      }
      return state;
    case DELETE_NOTE:
      newNotes = state.notes.filter((n) => n.id !== action.payload);
      saveToLocalStorage("notes", newNotes);
      return {
        ...state,
        notes: newNotes,
      };
    case OPEN_NOTE:
      return {
        ...state,
        selectedNote: action.payload,
        noteFormOpen: true,
      };
    case CLOSE_FORM:
      return {
        ...state,
        noteFormOpen: false,
        selectedNote: undefined,
      };
    default:
      return state;
  }
}
