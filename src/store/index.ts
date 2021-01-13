import { combineReducers, DeepPartial } from "redux";
import { createStore, Store } from "redux";
import { loadFromLocalStorage } from "../modules/notes/persistNotes";
import { noteReducer } from "./notes/reducers";
import { NoteState, NoteActionTypes } from "./notes/types";

const rootReducer = combineReducers({
  notes: noteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const initialState: RootState = {
  notes: {
    notes: loadFromLocalStorage("notes"),
    noteFormOpen: false,
    selectedNote: undefined,
  },
};

export const store = createStore(rootReducer, initialState);
