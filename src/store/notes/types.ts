import { Note } from "../../models/notes";

export const ADD_NOTE = "ADD_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const OPEN_NOTE = "OPEN_NOTE";
export const CLOSE_FORM = "CLOSE_FORM";

// export type NoteState = Array<Note>;

export interface NoteState {
  notes: Array<Note>;
  selectedNote?: Note;
  noteFormOpen: boolean;
}

export interface AddNoteAction {
  type: typeof ADD_NOTE;
  payload: Note;
}

export interface UpdateNoteAction {
  type: typeof UPDATE_NOTE;
  payload: Note;
}

export interface DeleteNoteAction {
  type: typeof DELETE_NOTE;
  payload: string;
}

export interface OpenNoteAction {
  type: typeof OPEN_NOTE;
  payload: Note;
}

export interface CloseFormAction {
  type: typeof CLOSE_FORM;
}

export type NoteActionTypes =
  | AddNoteAction
  | UpdateNoteAction
  | DeleteNoteAction
  | OpenNoteAction
  | CloseFormAction;
